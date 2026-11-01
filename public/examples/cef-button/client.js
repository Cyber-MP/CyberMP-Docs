let focused = false;

// F8: `ui` toggles keyboard focus and the cursor for the page
mp.commands.add('ui', () => {
  focused = !focused;
  mp.cef.setFocus(focused, focused);
});

mp.events.onCef('ui:hello', (text) => {
  console.log('from UI', text);
  mp.events.emitCef('ui:ack', `got: ${text}`);
});
