import HelloWorld from "./HelloWorld";

export default {
  title: "Hello World",
  component: HelloWorld
};

export const ViaTemplate = () => ({
  components: { HelloWorld },
  template: "<HelloWorld msg='msg from prop'>Hello from template!</HelloWorld>"
});

export const ViaJSX1 = () => {
  return {
    render(h) {
      return <HelloWorld msg="msg from prop">Hello from jsx child!</HelloWorld>;
    }
  };
};

// bei der Syntax muss der erste Buchstabe kleingeschrieben werden warum auch immer
// sonst kommt der Fehler: "fn.apply is not a function"
export const viaJSX2 = () => ({
  render: h => (
    <HelloWorld msg="goood template!">Hello from jsx child!</HelloWorld>
  )
});
