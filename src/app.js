import {formatJSON,minifyJSON,encodeBase64,decodeBase64,slugify,countText,formatTimestamp} from './utils.js';
const tools = {
'json-pretty':formatJSON,'json-minify':minifyJSON,'base64-encode':encodeBase64,'base64-decode':decodeBase64,
slug:slugify,count:input=>{const {characters,words,lines}=countText(input);return `Characters: ${characters}\nWords: ${words}\nLines: ${lines}`;},timestamp:formatTimestamp
};
const form=document.querySelector('#tool-form'),tool=document.querySelector('#tool'),input=document.querySelector('#input'),
output=document.querySelector('#output'),status=document.querySelector('#status');
form.addEventListener('submit',event=>{event.preventDefault();try{output.value=tools[tool.value](input.value);status.textContent='Done. Output is ready.';status.dataset.type='success';}catch(error){output.value='';status.textContent=`Could not process input: ${error.message}`;status.dataset.type='error';}});
document.querySelector('#copy').addEventListener('click',async()=>{if(!output.value)return;try{await navigator.clipboard.writeText(output.value);status.textContent='Copied to clipboard.';status.dataset.type='success';}catch{status.textContent='Clipboard unavailable. Select output to copy manually.';status.dataset.type='error';}});
document.querySelector('#clear').addEventListener('click',()=>{input.value='';output.value='';status.textContent='Input and output cleared.';status.dataset.type='success';input.focus();});