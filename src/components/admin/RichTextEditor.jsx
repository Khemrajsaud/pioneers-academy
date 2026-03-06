import {
  Bold,
  Italic,
  Underline,
  Palette,
  Type,
  List,
  ListOrdered,
  RotateCcw,
  Copy,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const RichTextEditor = ({ value, onChange, isDarkMode }) => {
  const editorRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedFontSize, setSelectedFontSize] = useState("4"); // Default is 16px in HTML format

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.execCommand("foreColor", false, color);
    editorRef.current?.focus();
    updateContent();
  };

  const handleFontSizeChange = (size) => {
    setSelectedFontSize(size);
    applyFormat("fontSize", size);
  };

  const handleInput = () => {
    updateContent();
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all content?")) {
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
        onChange("");
      }
    }
  };

  const fontSizeMap = {
    "1": "10px",
    "2": "13px",
    "3": "16px",
    "4": "18px",
    "5": "24px",
    "6": "32px",
    "7": "48px",
  };

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div
        className={`rounded-lg border p-3 space-y-2 ${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-50 border-slate-300"
        }`}
      >
        {/* Row 1: Text Formatting */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("bold");
            }}
            title="Bold (Ctrl+B)"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <Bold size={18} />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("italic");
            }}
            title="Italic (Ctrl+I)"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <Italic size={18} />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("underline");
            }}
            title="Underline (Ctrl+U)"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <Underline size={18} />
          </button>

          {/* Divider */}
          <div
            className={`w-px ${isDarkMode ? "bg-slate-600" : "bg-slate-300"}`}
          />

          {/* Font Size */}
          <select
            value={selectedFontSize}
            onChange={(e) => handleFontSizeChange(e.target.value)}
            onMouseDown={(e) => e.preventDefault()}
            title="Font Size"
            className={`px-3 py-1.5 rounded text-sm border outline-none transition-colors ${
              isDarkMode
                ? "bg-slate-700 border-slate-600 text-slate-200"
                : "bg-white border-slate-300 text-slate-700"
            }`}
          >
            <option value="1">10px</option>
            <option value="2">13px</option>
            <option value="3">16px</option>
            <option value="4">18px</option>
            <option value="5">24px</option>
            <option value="6">32px</option>
            <option value="7">48px</option>
          </select>

          {/* Text Color */}
          <div className="flex items-center gap-1">
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
              title="Text Color"
              className="w-8 h-8 rounded cursor-pointer border"
            />
            <span
              className={`text-xs font-medium px-2 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Color
            </span>
          </div>
        </div>

        {/* Row 2: Lists & Align & Clear */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("insertUnorderedList");
            }}
            title="Bullet List"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <List size={18} />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("insertOrderedList");
            }}
            title="Numbered List"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <ListOrdered size={18} />
          </button>

          <div
            className={`w-px ${isDarkMode ? "bg-slate-600" : "bg-slate-300"}`}
          />

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("removeFormat");
            }}
            title="Remove Formatting"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
            }`}
          >
            <Copy size={18} />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleClear();
            }}
            title="Clear All"
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-red-700/30 hover:bg-red-700/50 text-red-300"
                : "bg-red-50 hover:bg-red-100 text-red-600 border border-red-300"
            }`}
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={updateContent}
        suppressContentEditableWarning
        className={`w-full h-64 rounded-lg px-4 py-3 border outline-none overflow-y-auto text-sm leading-relaxed transition-colors ${
          isDarkMode
            ? "bg-slate-800 border-slate-700 text-white focus:border-blue-500"
            : "bg-white border-slate-300 text-slate-900 focus:border-blue-500"
        }`}
        style={{
          minHeight: "320px",
        }}
        spellCheck="true"
      />

      <style>{`
        [contenteditable] ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        [contenteditable] ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        [contenteditable] li {
          margin-bottom: 0.25rem;
        }
      `}</style>

      <p
        className={`text-xs font-medium ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        💡 Tip: Select text and click buttons to format. All formatting is
        preserved when saved.
      </p>
    </div>
  );
};

export default RichTextEditor;
