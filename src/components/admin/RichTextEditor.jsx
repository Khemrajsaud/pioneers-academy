import { useRef, useState, useEffect, useCallback } from "react";
import {
  Bold, Italic, Underline, List, ListOrdered,
  Heading1, Heading2, AlignLeft, AlignCenter, AlignRight,
  Link, RotateCcw, Strikethrough,
} from "lucide-react";


const ConfirmModal = ({ open, isDarkMode, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`rounded-2xl p-6 shadow-2xl max-w-xs w-full mx-4 border ${isDarkMode ? "bg-[#0f1729] border-slate-700" : "bg-white border-slate-200"
        }`}>
        <h3 className={`text-base font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Clear Content?
        </h3>
        <p className={`text-sm mb-5 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
          This will erase all text in the editor.
        </p>
        <div className="flex gap-3">
          <button onClick={onCancel} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${isDarkMode ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}>
            Cancel
          </button>
          <button onClick={onConfirm} className="flex-1 py-2 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-all">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};


const Btn = ({ onClick, title, children, isDarkMode, active }) => (
  <button
    type="button"
    onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    title={title}
    className={`p-2 rounded-lg transition-all text-sm ${active
        ? "bg-blue-500 text-white shadow-sm"
        : isDarkMode
          ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
          : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
      }`}
  >
    {children}
  </button>
);


const Sep = ({ isDarkMode }) => (
  <div className={`w-px h-6 self-center ${isDarkMode ? "bg-slate-600" : "bg-slate-200"}`} />
);


const RichTextEditor = ({ value, onChange, isDarkMode }) => {
  const editorRef = useRef(null);
  const isInit = useRef(false);
  const [showClear, setShowClear] = useState(false);

 
  useEffect(() => {
    if (editorRef.current && !isInit.current) {
      editorRef.current.innerHTML = value || "";
      isInit.current = true;
    }
  }, []); 


  useEffect(() => {
    if (!value && editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  }, [value]);

  const emit = useCallback(() => {
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  }, [onChange]);

  const exec = useCallback((cmd, val = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
    emit();
  }, [emit]);

  const handleClearConfirm = () => {
    if (editorRef.current) editorRef.current.innerHTML = "";
    onChange("");
    setShowClear(false);
  };

  const tb = isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200";
  const ed = isDarkMode
    ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-blue-500"
    : "bg-white border-slate-200 text-slate-900 focus:border-blue-500";

  return (
    <div className="space-y-0">
      <ConfirmModal
        open={showClear}
        isDarkMode={isDarkMode}
        onConfirm={handleClearConfirm}
        onCancel={() => setShowClear(false)}
      />

      {/* Toolbar */}
      <div className={`flex flex-wrap items-center gap-1.5 px-3 py-2 rounded-t-xl border border-b-0 ${tb}`}>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("bold")} title="Bold (Ctrl+B)">
          <Bold size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("italic")} title="Italic (Ctrl+I)">
          <Italic size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("underline")} title="Underline (Ctrl+U)">
          <Underline size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("strikeThrough")} title="Strikethrough">
          <Strikethrough size={15} />
        </Btn>

        <Sep isDarkMode={isDarkMode} />

        <Btn isDarkMode={isDarkMode} onClick={() => exec("formatBlock", "h2")} title="Heading 1">
          <Heading1 size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("formatBlock", "h3")} title="Heading 2">
          <Heading2 size={15} />
        </Btn>

        <Sep isDarkMode={isDarkMode} />

        <Btn isDarkMode={isDarkMode} onClick={() => exec("insertUnorderedList")} title="Bullet List">
          <List size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("insertOrderedList")} title="Numbered List">
          <ListOrdered size={15} />
        </Btn>

        <Sep isDarkMode={isDarkMode} />

        <Btn isDarkMode={isDarkMode} onClick={() => exec("justifyLeft")} title="Align Left">
          <AlignLeft size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("justifyCenter")} title="Align Center">
          <AlignCenter size={15} />
        </Btn>
        <Btn isDarkMode={isDarkMode} onClick={() => exec("justifyRight")} title="Align Right">
          <AlignRight size={15} />
        </Btn>

        <Sep isDarkMode={isDarkMode} />

      
        <label title="Text Color" className="flex items-center gap-1 cursor-pointer">
          <span className={`text-xs font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Color</span>
          <input
            type="color"
            defaultValue="#000000"
            onChange={(e) => exec("foreColor", e.target.value)}
            className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
          />
        </label>

        <Sep isDarkMode={isDarkMode} />

       
        <Btn isDarkMode={isDarkMode} onClick={() => exec("removeFormat")} title="Clear Formatting">
          <span className="text-xs font-bold px-0.5">Tx</span>
        </Btn>

     
        <button
          type="button"
          onMouseDown={(e) => { e.preventDefault(); setShowClear(true); }}
          title="Clear All Content"
          className={`p-2 rounded-lg text-xs font-semibold transition-all ${isDarkMode
              ? "bg-red-900/30 hover:bg-red-900/50 text-red-400"
              : "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200"
            }`}
        >
          <RotateCcw size={14} />
        </button>
      </div>

   
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={emit}
        onBlur={emit}
        spellCheck="true"
        className={`w-full min-h-[240px] rounded-b-xl border px-4 py-3 text-sm leading-relaxed outline-none overflow-y-auto transition-colors ${ed}`}
        style={{ minHeight: 240 }}
      />

  
      <p className={`text-xs pt-1 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
        💡 Select text then click toolbar buttons to format
      </p>

    
      <style>{`
        [contenteditable] ul { list-style-type: disc; padding-left: 1.5rem; margin: 0.25rem 0; }
        [contenteditable] ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0.25rem 0; }
        [contenteditable] li { margin-bottom: 0.2rem; }
        [contenteditable] h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.25rem; }
        [contenteditable] h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem; }
        [contenteditable]:empty::before {
          content: "Write your news content here...";
          color: ${isDarkMode ? "#64748b" : "#94a3b8"};
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
