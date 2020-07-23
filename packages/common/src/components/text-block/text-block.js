import React from "react";
import SbEditable from "storyblok-react";
import ReactMardown from "react-markdown";
import './text-block.scss'

const TextBlock = (props) => {
  console.log("give me props: ");
  console.log(props);
  const TitleTag = `h${props.blok.title_size}`;

  return (
    <SbEditable content={props.blok}>
      <div className="text-block">
        {props.blok.title && (
          <TitleTag className={`ef-h${props.blok.visual_title_size}`}>
            {props.blok.title}
          </TitleTag>
        )}
        <div
          className={`text-block--${
            props.blok.text_weight === "light" ? "light" : ""
          }`}
        >
          <ReactMardown source={props.blok.content} className="markdown" />
        </div>
      </div>
    </SbEditable>
  );
};
//   return (
//     <SbEditable content={props.blok}>
//       <div className="text-block">
//         {props.blok.title && (
//           <TitleTag className={`ef-h${props.blok.visual_title_size}`}>
//             {props.blok.title}
//           </TitleTag>
//         )}
//         <div
//           className={`text-block--${
//             props.blok.text_weight === 'light' ? 'light' : ''
//           }`}
//         >
//           <ReactMardown source={props.blok.content} className="markdown" />
//         </div>
//       </div>
//     </SbEditable>
//   );
// };

export default TextBlock;
