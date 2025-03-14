import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// css
import '../css/AppPage.css';

// utilities
import ReverseStack, {updateCache} from '../../utilities/ReverseStack';
import processHtmlStack from '../../utilities/processHtmlStack';
import processCssStack from '../../utilities/processCssStack';
import processJsStack from '../../utilities/processJsStack';

const AppPage = () => {

  const {collection, app} = useParams();
  
  const buttonContainer = useRef(null);
  const flexContainer1 = useRef(null);
  const flexContainer2 = useRef(null);

  useEffect(async () => {
    if (collection !== 'react') {
      document.title = app;
      window.scrollTo({top: 0, behavior: 'smooth'});
      document.querySelector(".app-master-container").classList.add("REACT-bottom-border");

      const buttons = buttonContainer.current.children;
      const codeContainer = [];
      
      for (let div of flexContainer1.current.children) {
        if (div.classList.contains("APP-code-container")) codeContainer.push(div);
      }

      for (let i of buttons) {
        i.addEventListener("click", () => {
          for (let j of buttons) {
            if (i===j) {
              j.classList = "APP-button REACT-green-extra-light";
              codeContainer.forEach((div, k) => {
                if (+j.getAttribute('page') === k) div.classList.remove("REACT-hide");
                else div.classList.add("REACT-hide");
              })
            }
            else {
              j.classList = "APP-button REACT-gray-extra-light";
            }
          }
        });
      }
      const { data } = await axios.get(`/apps/${collection}/${app}`);
      
      for (const key in data) {
        const pre = document.createElement("pre");
        let code = data[key];
        let cache = new ReverseStack();
        if (key !== "route") updateCache(cache, code.split(''), '');
        switch (key) {
          case "route":
            const iframe = document.createElement('iframe');
            iframe.src = `/data/apps/${data[key][0]}/${data[key][1]}/app.html`;
            iframe.frameBorder="0";
            flexContainer2.current.appendChild(iframe);
          case "app":
            processHtmlStack(cache, pre);
            codeContainer[0].appendChild(pre);
            break;
          case "style":
            pre.appendChild(processCssStack(cache));
            codeContainer[1].appendChild(pre);
            break;
          case "script":
            processJsStack(cache, pre);
            codeContainer[2].appendChild(pre);
            break;
          default:
            break;
        }
      }
      return () => {
        document.querySelector(".app-master-container").classList.remove("REACT-bottom-border");
      }
    }
  }, [])

  if (collection === 'react') return null;
  return (
    <div className="APP-master-container">
      <div className="APP-flex-container APP-flex-divs REACT-flex">
        <div className="APP-flex-container1 REACT-gray-dark" ref={flexContainer1}>
          <div className="APP-patch REACT-gray-dark"></div>
          <div className="APP-code-container REACT-global-scroll"></div>
          <div className="APP-code-container REACT-global-scroll REACT-hide"></div>
          <div className="APP-code-container REACT-global-scroll REACT-hide"></div>
          <div className="APP-button-container" ref={buttonContainer}>
            <div className="APP-button REACT-green-extra-light" page="0"></div>
            <div className="APP-button REACT-gray-extra-light" page="1"></div>
            <div className="APP-button REACT-gray-extra-light" page="2"></div>
          </div>
        </div>
        <div className="APP-flex-container2" ref={flexContainer2}></div>
      </div>
    </div>
  )
}

export default AppPage