import React from 'react';
import { motion } from 'framer-motion';

// --- INLINE SVG ICONS ---
// This removes the need for the 'react-icons' library, fixing the error.

const ReactIcon = (props) => (
  <svg {...props} viewBox="0 0 1139 1024" fill="currentColor"><path d="M1139 512c0-9.9-0.4-19.7-1.4-29.4-2-19.9-5.1-39.4-9.2-58.5-7.7-36.2-18.4-71.1-31.6-104.2-13.3-33.1-28.9-64.2-46.3-93-17.5-28.8-36.6-55.2-57.2-78.7s-42.6-44-65.7-61.1c-23.1-17.1-47.5-31.1-72.9-41.5-25.4-10.4-51.7-17.2-78.8-20.1-27.1-2.9-54.6-1.9-82.1 2.2-27.5 4.1-54.6 11.2-80.9 21s-51.5 22.1-75.3 36.6-46.1 31-66.6 49.3c-20.5 18.3-39.3 38.3-56.2 59.9-16.9 21.6-31.8 44.7-44.6 69.1-12.8 24.4-23.4 49.9-31.7 76.2-8.3 26.3-14.3 53.3-17.8 80.6-3.5 27.3-4.5 54.8-2.9 82.2 1.6 27.4 5.9 54.6 12.8 81.2 6.9 26.6 16.3 52.4 28.1 77.2 11.8 24.8 25.8 48.4 42 70.6 16.2 22.2 34.4 42.8 54.5 61.5s41.9 35.5 65 49.9c23.1 14.4 47.4 26.3 72.8 35.3s51.9 15.1 79 17.9c27.1 2.8 54.6 1.7 82.1-2.4 27.5-4.1 54.6-11.2 80.9-20.9s51.5-22 75.3-36.5c23.8-14.5 46-31 66.6-49.3 20.6-18.3 39.3-38.3 56.2-59.9 16.9-21.6 31.8-44.7 44.6-69.1 12.8-24.4 23.4-50 31.7-76.3 8.3-26.3 14.3-53.3 17.8-80.6 3.5-27.3 4.5-54.8 2.9-82.2-1.5-27.4-5.8-54.6-12.7-81.2zM569.5 161.8c-11.8 0-21.4 9.6-21.4 21.4v220.2c0 11.8 9.6 21.4 21.4 21.4s21.4-9.6 21.4-21.4V183.2c0.1-11.8-9.5-21.4-21.4-21.4z m-284.2 110.1c-8.4-8.4-21.9-8.4-30.2 0-8.4 8.4-8.4 21.9 0 30.2l110.1 110.1c4.2 4.2 9.7 6.3 15.1 6.3s10.9-2.1 15.1-6.3c8.4-8.4 8.4-21.9 0-30.2L285.3 271.9z m-110.1 284.2c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4h220.2c11.8 0 21.4-9.6 21.4-21.4s-9.6-21.4-21.4-21.4H175.2z m284.2 284.2c8.4 8.4 8.4 21.9 0 30.2-4.2 4.2-9.7 6.3-15.1 6.3s-10.9-2.1-15.1-6.3l-110.1-110.1c-8.4-8.4-8.4-21.9 0-30.2s21.9-8.4 30.2 0l110.1 110.1z m110.1-284.2c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H449.3c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4h220.2z m284.2-110.1c8.4-8.4 8.4-21.9 0-30.2l-110.1-110.1c-8.4-8.4-21.9-8.4-30.2 0s-8.4 21.9 0 30.2l110.1 110.1c4.2 4.2 9.7 6.3 15.1 6.3s10.9-2.1 15.1-6.3zM963.7 533.4H743.5c-11.8 0-21.4 9.6-21.4 21.4s9.6 21.4 21.4 21.4h220.2c11.8 0 21.4-9.6 21.4-21.4s-9.6-21.4-21.4-21.4z m-110.1-284.2c-8.4-8.4-21.9-8.4-30.2 0l-110.1 110.1c-8.4 8.4-8.4 21.9 0 30.2s21.9 8.4 30.2 0l110.1-110.1c8.4-8.4 8.4-21.9 0-30.2zM569.5 862.2c-96.2 0-174.4-78.2-174.4-174.4s78.2-174.4 174.4-174.4 174.4 78.2 174.4 174.4-78.2 174.4-174.4 174.4z"/></svg>
);
const NodeJsIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M11.69 1.222a2.333 2.333 0 00-2.074 1.353l-8.03 13.906a2.333 2.333 0 00.17 2.653l.002.003c.63.858 1.704 1.22 2.72 1.05l16.15-2.793a2.333 2.333 0 001.89-2.008l1.4-8.03a2.333 2.333 0 00-1.354-2.584L6.417 1.767a2.333 2.333 0 00-2.39-.022l-.003-.002zm-.61 3.525l9.284 4.14-1.127 6.45-9.28-4.14 1.123-6.45zm-1.39 8.016l9.283 4.14-1.127 6.45-9.28-4.14 1.124-6.45z"/></svg>
);
const ExpressIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M3.524 10.61h5.832c.312 0 .546-.06.702-.18.156-.12.234-.33.234-.63 0-.312-.078-.546-.234-.702-.156-.156-.39-.234-.702-.234H4.512c-.294 0-.516.066-.666.198-.15.132-.225.336-.225.612v5.52c0 .276.075.48.225.612s.372.198.666.198h4.842c.312 0 .546-.078.702-.234.156-.156.234-.39.234-.702 0-.3-.078-.522-.234-.666-.156-.144-.39-.216-.702-.216H3.524v-3.72zm11.334 5.25c-.246.228-.558.342-.936.342s-.684-.114-.924-.342c-.24-.228-.36-.516-.36-.864 0-.36.12-.648.36-.864.24-.216.546-.324.924-.324s.69.108.936.324c.246.216.369.504.369.864 0 .348-.123.636-.369.864zm-.132-2.31c.36-.36.54-.78.54-1.26v-.66c0-.492-.18-.918-.54-1.278-.36-.36-.786-.54-1.278-.54-.504 0-.936.18-1.296.54s-.54.786-.54 1.296v.612c0 .468.18.876.54 1.224.36.348.792.522 1.296.522s.918-.174 1.278-.522zm-4.47-2.94V7.598h3.318c.636 0 1.182.222 1.638.666.456.444.684.99.684 1.638s-.228 1.188-.684 1.638c-.456.456-1.002.684-1.638.684H9.722v2.412c0 .3.078.522.234.666s.39.216.702.216h3.696c.216 0 .396.06.54.18s.216.294.216.522c0 .24-.072.432-.216.576s-.324.216-.54.216h-4.65c-.294 0-.516-.066-.666-.198-.15-.132-.225-.336-.225-.612zM2.08 18.062V6.014L10.323 2h5.215l8.39 4.014v12.048L15.68 22h-5.46L2.08 18.062z" color="#000"/></svg>
);
const TailwindIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.036,0-5.5,2.463-5.5,5.5s2.464,5.5,5.5,5.5s5.5-2.463,5.5-5.5S15.037,4.8,12.001,4.8z M12.001,13.8c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S13.933,13.8,12.001,13.8z M20.501,10.3c-3.036,0-5.5,2.463-5.5,5.5s2.464,5.5,5.5,5.5s5.5-2.463,5.5-5.5S23.537,10.3,20.501,10.3z M20.501,19.3c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S22.433,19.3,20.501,19.3z M3.501,10.3c-3.036,0-5.5,2.463-5.5,5.5s2.464,5.5,5.5,5.5s5.5-2.463,5.5-5.5S6.537,10.3,3.501,10.3z M3.501,19.3c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S5.433,19.3,3.501,19.3z M12.001,0.3c-3.036,0-5.5,2.463-5.5,5.5s2.464,5.5,5.5,5.5s5.5-2.463,5.5-5.5S15.037,0.3,12.001,0.3z M12.001,8.3c-1.933,0-3.5-1.567-3.5-3.5s1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5S13.933,8.3,12.001,8.3z"/></svg>
);
const OpenAIIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 10.1621C22.2819 9.51606 21.7658 9 21.1198 9C20.4738 9 19.9577 9.51606 19.9577 10.1621V10.7411C18.6369 9.61019 16.9234 8.94165 15.039 8.94165C11.3719 8.94165 8.3562 11.854 8.3562 15.4243C8.3562 17.1147 9.0019 18.667 10.0543 19.8211V18.2372C9.56305 17.4331 9.24943 16.4716 9.24943 15.4243C9.24943 12.3789 11.847 9.83488 15.039 9.83488C16.5056 9.83488 17.8264 10.4138 18.8203 11.368L18.0645 12.0653C17.9184 12.201 17.9079 12.4382 18.0436 12.5843L19.5505 14.21C19.6862 14.3561 19.9234 14.3666 20.0695 14.2309L21.4651 12.9242C21.6112 12.7885 21.6217 12.5513 21.486 12.4052L20.8267 11.6975C21.6983 11.4501 22.2819 11.1396 22.2819 10.1621ZM1.71811 13.8379C1.71811 14.4839 2.23417 15 2.88017 15C3.52618 15 4.04224 14.4839 4.04224 13.8379V13.2589C5.36301 14.3898 7.07656 15.0583 8.96101 15.0583C12.6281 15.0583 15.6438 12.146 15.6438 8.57567C15.6438 6.88534 14.9981 5.33297 13.9457 4.17887V5.76277C14.4369 6.56686 14.7506 7.52839 14.7506 8.57567C14.7506 11.6211 12.153 14.1651 8.96101 14.1651C7.49439 14.1651 6.17362 13.5862 5.17967 12.632L5.93551 11.9347C6.08162 11.799 6.0921 11.5618 5.95639 11.4157L4.4495 9.79001C4.3138 9.64391 4.07656 9.63342 3.93046 9.76913L2.53488 11.0758C2.38878 11.2115 2.3783 11.4487 2.51401 11.5948L3.17333 12.3025C2.30174 12.5499 1.71811 12.8604 1.71811 13.8379ZM13.8379 1.71811C14.4839 1.71811 15 2.23417 15 2.88017C15 3.52618 14.4839 4.04224 13.8379 4.04224H8.16211C7.51606 4.04224 7 3.52618 7 2.88017C7 2.23417 7.51606 1.71811 8.16211 1.71811H13.8379ZM13.8379 19.9577H8.16211C7.51606 19.9577 7 20.4738 7 21.1198C7 21.7658 7.51606 22.2819 8.16211 22.2819H13.8379C14.4839 22.2819 15 21.7658 15 21.1198C15 20.4738 14.4839 19.9577 13.8379 19.9577Z"/></svg>
);
const VercelIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg>
);
const JavaIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.43 14.54c.76-.23 1.34-.69 1.34-1.63 0-1.12-.9-1.78-2.03-1.78h-1.25v3.41h1.23c.73 0 1.34-.08 1.71-.37zm-3.88-5.73c.72-.4 1.63-.6 2.7-.6 1.25 0 2.29.23 3.09.7.81.47 1.21 1.25 1.21 2.37 0 1-.32 1.8-.96 2.41-.64.6-1.55.93-2.73.93-.45 0-.85-.05-1.21-.14v2.75h-2.1V8.81zm10.74 3.23c0-2.12-1.42-3.6-3.48-3.6-1.95 0-3.35 1.4-3.35 3.53 0 2.15 1.43 3.6 3.48 3.6 1.95 0 3.35-1.42 3.35-3.53zm-2.09-.02c0 1.2-.64 1.9-1.39 1.9-.73 0-1.31-.68-1.31-1.88 0-1.23.59-1.92 1.31-1.92.76 0 1.39.7 1.39 1.9zM0 24V0h24v24H0z" fillRule="evenodd"/></svg>
);
const PythonIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M23.152 10.344a2.034 2.034 0 0 0-1.488-.66h-4.32v-3.42c0-2.34-.144-3.6-2.28-3.6H7.344a2.23 2.23 0 0 0-1.608.66C4.09 5.34.864 7.944.864 11.34v1.32c0 3.396 3.228 5.996 4.884 7.404a2.23 2.23 0 0 0 1.608.66h7.716c2.136 0 2.28-1.26 2.28-3.6v-3.42h2.256c.84 0 1.512-.684 1.512-1.512s-.672-1.512-1.512-1.512zM12.024 4.5h2.52c.288 0 .504.216.504.504v5.304a.506.506 0 0 1-.504.504h-5.832a.506.506 0 0 1-.504-.504V7.02c0-.288.216-.504.504-.504zm0 15c-2.88 0-3.168-1.584-3.168-3.6v-3h6.336c.84 0 1.512-.672 1.512-1.512s-.672-1.512-1.512-1.512h-8.5v2.88c0 2.016.288 3.6 3.168 3.6zm-3.168-9.696c0-.288-.216-.504-.504-.504H5.016a.506.506 0 0 0-.504.504v2.88c0 .288.216.504.504.504h2.832v-2.88z"/></svg>
);
const CppIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M15.18 16.14a4.12 4.12 0 0 1-2.22-2.1l-.36.24a3.7 3.7 0 0 0-1.02 2.1 4.56 4.56 0 0 0 4.5 4.56 4.7 4.7 0 0 0 4.56-4.68V7.32h-1.62v8.82a3.06 3.06 0 0 1-3.12 3.06 2.94 2.94 0 0 1-2.94-2.88 3 3 0 0 1 .9-2.16l-1.02-.66a4.56 4.56 0 0 0-1.32 3.24 4.5 4.5 0 0 0 4.5 4.5 4.44 4.44 0 0 0 4.5-4.32V7.32h1.62v8.82a6.06 6.06 0 0 1-6.18 6.12zM13.02 0v1.62h2.88v2.88h1.62V1.62h2.88V0h-2.88V-2.82h-1.62V0zm-2.88 5.7V7.32h2.88v2.88h1.62V7.32h2.88V5.7h-2.88V2.88h-1.62V5.7zM.06 12a12 12 0 1 0 12-12A12 12 0 0 0 .06 12zm21.84 0a9.9 9.9 0 1 1-9.9-9.9 9.9 9.9 0 0 1 9.9 9.9z"/></svg>
);
const MysqlIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.44 14.185c.306.074.606.111.9.111.411 0 .777-.065 1.097-.194.321-.13.582-.32.784-.57.201-.25.302-.544.302-.882 0-.297-.058-.55-.173-.758a.933.933 0 0 0-.486-.49c-.218-.102-.482-.153-.79-.153h-1.633v2.936zm4.18-5.353c-.347-.234-.784-.352-1.312-.352-.456 0-.877.068-1.262.204-.385.136-.708.334-.969.593-.26.26-.455.575-.584.945-.128.37-.192.79-.192 1.258v.25c0 .348.026.68.077 1 .052.322.13.611.235.867l.154.39c.273.654.673 1.157 1.2 1.508.528.35 1.14.526 1.837.526.41 0 .802-.05 1.178-.15.375-.1.69-.25.944-.452.254-.202.44-.453.557-.753.118-.3.177-.635.177-1.004 0-.396-.08-.737-.239-.022-.16-.285-.38-.504-.66-.658-.281-.154-.622-.23-1.023-.23-.294 0-.55.038-.767.111l-.348.123v-1.768c.112-.06.242-.11.39-.148.148-.039.308-.058.48-.058.293 0 .54.06.74.179.2.119.3.29.3.513v.537h1.633V9.75c0-.39-.099-.714-.296-.972a1.81 1.81 0 0 0-.79-.6zM3 13.5c0-.414.336-.75.75-.75h1.5v-1.5H3.75a.75.75 0 0 1 0-1.5h1.5V8.25a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5H3.75a.75.75 0 0 1-.75-.75z" color="#000"/></svg>
);
const GitIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.021 8.342a3.468 3.468 0 0 0-4.06-4.061 3.47 3.47 0 0 0-4.062 4.061c0 1.205.626 2.261 1.573 2.875-.111.272-.25.534-.413.781a5.215 5.215 0 0 1-1.127.915 5.22 5.22 0 0 1-1.393.593 5.38 5.38 0 0 1-3.08-.12A5.39 5.39 0 0 1 7.18 12.2a.75.75 0 1 0-1.299.75c.29.503.674.953 1.136 1.32a6.884 6.884 0 0 0 1.96 1.121 6.89 6.89 0 0 0 2.298.532 6.88 6.88 0 0 0 4.168-.135 6.89 6.89 0 0 0 2.949-2.308c.26-.401.488-.82.68-1.252.613-.948.97-2.11.97-3.345M18.68 5a1.968 1.968 0 1 1-2.783 2.783A1.968 1.968 0 0 1 18.68 5M8.47 19.53a1.968 1.968 0 1 1-2.783 2.783 1.968 1.968 0 0 1 2.783-2.783m8.026-11.5a1.968 1.968 0 1 1-2.783 2.783 1.968 1.968 0 0 1 2.783-2.783"/></svg>
);
const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.626 0 12 0z"/></svg>
);
const ExternalLinkIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);
const SourceControlIcon = (props) => (
  <svg {...props} viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM3.5 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM5 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM5 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6.5-11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-3 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM11 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/><path d="M8 1c3.866 0 7 2.239 7 5s-3.134 5-7 5-7-2.239-7-5 3.134-5 7-5zm5.5 5c0-2.071-2.462-3.75-5.5-3.75S2.5 3.929 2.5 6s2.462 3.75 5.5 3.75 5.5-1.679 5.5-3.75zm-11 5.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM8 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm5.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>
);


const Skills = () => {
  // Restructured data to focus on core competencies with proof
  const coreCompetencies = [
    {
      area: "AI-Powered Full-Stack Development",
      description: "I specialize in building intelligent, end-to-end web applications by integrating modern front-end frameworks with powerful back-end logic and cutting-edge AI APIs.",
      technologies: [
        { name: "React", icon: ReactIcon, color: "text-blue-500" },
        { name: "Node.js", icon: NodeJsIcon, color: "text-green-600" },
        { name: "Express.js", icon: ExpressIcon, color: "text-gray-600 dark:text-gray-400" },
        { name: "Tailwind CSS", icon: TailwindIcon, color: "text-cyan-500" },
        { name: "OpenAI API", icon: OpenAIIcon, color: "text-green-500" },
        { name: "Vercel", icon: VercelIcon, color: "text-black dark:text-white" },
      ],
      proofPoints: [
        { 
          label: "View Projects", 
          icon: ExternalLinkIcon, 
          url: "#projects" // This now links to the projects section
        }
      ]
    },
    {
      area: "Robust Back-End & API Design",
      description: "My focus is on creating scalable, secure, and efficient server-side applications and RESTful APIs, grounded in solid database architecture and design principles.",
      technologies: [
        { name: "Java", icon: JavaIcon, color: "text-red-500" },
        { name: "Python", icon: PythonIcon, color: "text-yellow-600" },
        { name: "Node.js", icon: NodeJsIcon, color: "text-green-600" },
        { name: "SQL", icon: MysqlIcon, color: "text-blue-700" },
        { name: "Git", icon: GitIcon, color: "text-orange-600" },
        { name: "GitHub", icon: GithubIcon, color: "text-gray-800 dark:text-white" },
      ],
      proofPoints: [
        { 
          label: "View Projects", 
          icon: ExternalLinkIcon, 
          url: "#projects" // This now also links to the projects section
        },
        
      ]
    },
     {
      area: "Foundational Software Engineering",
      description: "I have a strong foundation in core computer science principles and object-oriented programming, allowing me to solve complex problems efficiently and write clean, maintainable code.",
      technologies: [
        { name: "C++", icon: CppIcon, color: "text-blue-600" },
        { name: "Java", icon: JavaIcon, color: "text-red-500" },
        { name: "Data Structures", icon: null, color: "" }, // Icon not necessary for concepts
        { name: "Algorithms", icon: null, color: "" },
      ],
      proofPoints: [
        { 
          label: "Problem-Solving Repo", 
          icon: GithubIcon, 
          url: "https://github.com/Vishvambar/Daily-" // This remains an external link
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Instead of just listing technologies, here's what I build with them. These are the areas where I deliver real-world value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {competency.area}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5 flex-grow text-sm">
                {competency.description}
              </p>
              
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {competency.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {tech.icon && <tech.icon className={`w-4 h-4 ${tech.color}`} />}
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">Proof of Work</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  {competency.proofPoints.map((proof, i) => (
                     <a
                      key={i}
                      href={proof.url}
                      // For external links, open in a new tab
                      target={proof.url.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 text-gray-800 dark:text-white hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <proof.icon className="w-5 h-5" />
                      <span className="text-sm">{proof.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

