import Link from "next/link";

import { ImageContainer, SuccessContainer } from "@/styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Sua camiseta <strong>XXXXXXXXX</strong> já está sendo preparada e será
        enviada para seu endereço.
      </p>

      <Link href={`/`} passHref legacyBehavior>
        voltar ao catálogo
      </Link>
    </SuccessContainer>
  );
}
