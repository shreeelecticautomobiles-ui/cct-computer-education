import React, { useState, useRef, useEffect } from 'react';
import { Terminal, RefreshCw, Play, CircleDot, ChevronRight } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<string[]>([
    'Welcome to CCT Academic Cloud Sandbox [Version 4.12]',
    '(c) 2026 CCT Computer Education. All rights reserved.',
    '',
    'Type "help" to view interactive commands, or "run" to execute the main script sample.'
  ]);
  const [input, setInput] = useState('');
  const [scriptVal, setScriptVal] = useState(`// Advanced MERN Stack Component Hook Demo
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border">
      <p>CCT Success Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    if (trimmed === '') {
      response = [''];
    } else if (trimmed === 'help') {
      response = [
        `> ${cmd}`,
        'Available terminal commands:',
        '  help      - Print this guidance panel',
        '  list      - List high-demand programming batches starting this week',
        '  info      - Output CCT Academic official address & licensing metadata',
        '  run       - Compile & execute the current TypeScript code block',
        '  discount  - Reveal secret scholarship promotion key',
        '  clear     - Wipe sandbox terminal logs'
      ];
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else if (trimmed === 'list') {
      response = [
        `> ${cmd}`,
        '🚀 ACTIVE BATCHES STARTING THIS WEEK:',
        '  -------------------------------------------------------------',
        '  • MERN Full-Stack Masterclass | Mon/Wed/Fri | 6:00 PM (Live)',
        '  • Python Data Analytics & AI  | Tue/Thu/Sat | 4:00 PM (Live)',
        '  • Cybersecurity & Ethical     | Weekends    | 10:00 AM (Hybrid)',
        '  -------------------------------------------------------------',
        '  Click "Enroll Now" on the main portal cards to reserve your seat.'
      ];
    } else if (trimmed === 'info') {
      response = [
        `> ${cmd}`,
        '🏘️ CCT COMPUTER EDUCATION ACADEMIC METADATA:',
        '  Address: 19/520, Lal Bahadur Shastri Marg, DDA Flats, Doctor Ambedkar Nagar, Madangir, New Delhi, Delhi 110062',
        '  Landmark: Near Ambedkar Nagar DDA Flats',
        '  Phone support: +91 8527208085',
        '  Accreditation: Certified Professional Skill Development center'
      ];
    } else if (trimmed === 'discount') {
      response = [
        `> ${cmd}`,
        '🎉 SCHOLARSHIP CODE UNLOCKED!',
        '  Apply coupon [ CCTNEW20 ] in your cart drawer to save 20% flat',
        '  on all Signature Certification Tracks and MERN masterclasses!'
      ];
    } else if (trimmed === 'run') {
      response = [
        `> ${cmd}`,
        '⚙️ Initiating CCT Compiler v4.12-Prod...',
        '📦 Checking project directory: Success! (No syntax errors detected)',
        '🚀 Executing compiled bundle inside Cloud Sandbox Container...',
        '----------------------------------------',
        '✨ RENDER SUMMARY:',
        '   Status: Online [Port 3000 mapped]',
        '   Output: React interactive counter fully mounted!',
        '   Interactive simulation initialized.',
        '----------------------------------------',
        '✅ Script finished successfully.'
      ];
    } else {
      response = [
        `> ${cmd}`,
        `bash: command not found: "${cmd}". Type "help" to see valid inputs.`
      ];
    }

    setHistory((prev) => [...prev, ...response]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 text-left font-mono">
      {/* Code Editor Part */}
      <div className="md:col-span-7 bg-[#0b0f19] rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-112">
        {/* Editor Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1323] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-400 font-semibold pl-2">counter_hook.tsx</span>
          </div>
          <button
            onClick={() => handleCommand('run')}
            className="cursor-pointer bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded px-2.5 py-1 text-xs font-bold transition flex items-center gap-1 border border-cyan-500/30"
          >
            <Play className="h-3 w-3 fill-cyan-400" /> Run
          </button>
        </div>

        {/* Text Area Code */}
        <textarea
          value={scriptVal}
          onChange={(e) => setScriptVal(e.target.value)}
          className="flex-1 w-full bg-[#030712] p-4 text-[#38bdf8] text-[11px] sm:text-xs leading-relaxed font-mono focus:outline-none resize-none"
          spellCheck="false"
        />
      </div>

      {/* Terminal Sandbox Part */}
      <div className="md:col-span-5 bg-[#030712] rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-112">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span className="text-xs text-slate-300 font-semibold">CCT Interactive Sandbox</span>
          </div>
          <button
            onClick={() => {
              setHistory(['Dashboard logs cleared.', 'Type "help" for a fresh command guide.']);
            }}
            className="rounded p-1 text-slate-400 hover:text-white transition"
            title="Clear Log Console"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Output Logs */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5 text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono">
          {history.map((line, index) => (
            <div key={index} className={line.startsWith('>') ? 'text-cyan-400 font-bold' : line.includes('❌') ? 'text-rose-500': line.includes('🎉') ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
              {line}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#090d16] border-t border-slate-800 flex items-center">
          <span className="text-cyan-500 mr-1.5">
            <ChevronRight className="h-4 w-4 stroke-[3]" />
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type command here (e.g. help, list, discount)..."
            className="flex-1 bg-transparent text-white border-none py-1 focus:outline-none placeholder-slate-600 text-xs sm:text-sm font-mono"
            id="terminal-input-input"
          />
        </div>
      </div>
    </div>
  );
}
