interface IExemplo {
  foo: string;
}

const ComponenteA = ({ foo }: IExemplo) => (
  <>
    <h1>Este é o componente A: {foo}</h1>
    <ComponenteB foo={foo} />
  </>
);

const ComponenteB = ({ foo }: IExemplo) => (
  <>
    <h1>Este é o componente B: {foo}</h1>
  </>
);

const SimpleComponent = () => <ComponenteA foo="bar" />;

export default SimpleComponent;
