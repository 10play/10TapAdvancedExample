import React from "react";
import { EditorContent } from "@tiptap/react";
import { useTenTap, TenTapStartKit } from "@10play/tentap-editor";
import { CounterBridge } from "../CounterBridge";

/**
 * Here we control the web side of our custom editor
 */
export const AdvancedEditor = () => {
  // TenTapStartKit's CoreBridge already adds Document, Paragraph and Text.
  const editor = useTenTap({
    bridges: [...TenTapStartKit, CounterBridge],
  });
  return (
    <EditorContent
      editor={editor}
      className={window.dynamicHeight ? "dynamic-height" : undefined}
    />
  );
};
