import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrandywineEditor } from "react-brandywine-editor/lib/edit-mode/index";
import { BrandywineReader } from "react-brandywine-editor/lib/read-mode/index";

import Image from "react-brandywine-editor/lib/plugins/image";
import Markdown from "react-brandywine-editor/lib/plugins/markdown";
import CoverPhoto from "react-brandywine-editor/lib/plugins/cover-photo";
import Spacer from "react-brandywine-editor/lib/plugins/spacer";
import Carousel from "react-brandywine-editor/lib/plugins/carousel";
import HTMLVideo from "react-brandywine-editor/lib/plugins/html-video";
import EmbeddedVideo from "react-brandywine-editor/lib/plugins/embedded-video";

import testData from "./test-data";

const plugins = [
  Image,
  Markdown,
  CoverPhoto,
  Spacer,
  Carousel,
  HTMLVideo,
  EmbeddedVideo
];

export default function App(props) {
  function onEditorChange(header, blocks) {
    // save this somewhere
  }

  return (
    <div className="container">
      <BrandywineEditor
        plugins={plugins}
        onChange={onEditorChange}
        fullHeight={true}
        pageData={testData}
      />
      {/* Readonly module for static rendering */}
      {/* <div style={{marginBottom: '20px'}}>
				<BrandywineReader
					plugins={plugins}
					pageData={testData}
				/>
			</div> */}
    </div>
  );
}
