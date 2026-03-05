import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://brick.inforcedata.com.br/api/image/large/223138.jpg"
        alt="imagem do lugar"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3>São Paulo</h3>
        <p className="truncate text-gray-300">
          Apartamento , 4 quartos ,banheiro,sala, sala de estar,cozinha, varanda
          , churrasqueira,perto do centro
        </p>
        <p>
          <span className="text-xl font-semibold">R$ 500</span>por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
