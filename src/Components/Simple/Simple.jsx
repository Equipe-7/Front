import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import Racoes from "../../apiTest/apiRacoes";
import "./Simple.css"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const Simple = () => {
    return (
        < Carousel
            ssr
            partialVisbile
            responsive={responsive}
            className="container-simple"
        >
            {Racoes.map((produto) => (
                <Card imagem={produto.url} texto={produto.texto} valor={produto.valor} />
            ))}
        </Carousel>
    );
};

export default Simple;