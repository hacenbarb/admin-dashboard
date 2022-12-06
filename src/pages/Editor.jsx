import React from 'react'
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from "@syncfusion/ej2-react-richtexteditor"
import { EditorData } from "../data/dummy";
import {Header } from "../components"

const Editor = () => {
  const InjectServices = [HtmlEditor, Toolbar, QuickToolbar, Link, Image]
  return (
    <div>
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject 
        services= {InjectServices}
      />
    </RichTextEditorComponent>
  </div>
  )
}

export default Editor