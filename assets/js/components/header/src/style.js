import { css } from "lit";
export const style = css `:host, div, section {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 7px;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

img {
  width: 100%;
}

.image, .content {
  position: absolute;
}

.image {
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.content {
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
`;
//# sourceMappingURL=style.js.map