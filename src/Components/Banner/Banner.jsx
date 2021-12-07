import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="banner-container" fade>
      <Carousel.Item className="banner-item" interval={1000}>
        <img
          src="https://t3.ftcdn.net/jpg/02/79/54/64/360_F_279546457_hCid5OkJudDi8W8wSyzLXG9ZkaePxYbU.jpg"
          alt=""
        />
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/8c2abc73308551.Y3JvcCw4MDgsNjMyLDAsMA.png" />
        <Carousel.Caption className="texto-banner">
          <h3>Rações</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner-item">
        <img
          src="https://petepop.ig.com.br/wp-content/uploads/2020/08/young-1835731_640.jpg"
          alt=""
        />
        <img src="https://camposdeprovence.com.br/wp-content/uploads/2018/04/congresso-cardiologia-veterinaria-pousada-campos-de-provence.jpg" />
        <Carousel.Caption className="texto-banner">
          <h3>Cuidados para seu Pet</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner-item" interval={1000}>
        <img
          src="https://bensvet.com.br/wp-content/uploads/2019/11/aprenda-a-como-prestar-o-melhor-atendimento-veterinario-que-seu-cliente-j%C3%A1-recebeu.jpg"
          alt=""
        />
        <img src="https://unileao.edu.br/blog/wp-content/uploads/2018/01/medico-veterinario.jpg" />
        <Carousel.Caption className="texto-banner">
          <h3>Veterinarios</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner-item">
        <img
          src="https://www.selecoes.com.br/wp-content/uploads/2020/05/pet-sozinho-em-casa-760x450.jpg"
          alt=""
        />
        <img src="https://i.pinimg.com/736x/d4/53/de/d453de8d4a1a143cab9e194629036f4b--birthday-wallpaper-cat-basket.jpg" />
        <Carousel.Caption className="texto-banner">
          <h3>Camas Pets</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner-item" interval={1000}>
        <img
          src="https://blog.dedobrinquedo.com.br/wp-content/uploads/2021/02/brinquedos-para-pet-1.png"
          alt=""
        />
        <img src="https://blog.dramei.com.br/wp-content/uploads/2016/01/brinquedos-gato.jpg" />
        <Carousel.Caption className="texto-banner">
          <h3>Brinquedos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
