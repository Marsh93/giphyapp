import PropTypes from "prop-types";
import styled from "styled-components";
import Warning from "../empty/Empty";
import "animate.css";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.view ? "block" : "none")};
  position: fixed;
  z-index: 3;
  top: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: ${(props) => (props.view ? "0" : "-300")}px;
  z-index: 4;
  width: 300px;
  height: 100%;
  padding: 0.5rem 1rem;
  box-shadow: 0 6px 12px rgba(107, 82, 82, 0.3);
  background-color: white;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemMenu = styled.button`
  background: #3e3b42;
  border: 0;
  border-radius: 10px;
  color: white;
  margin: 2px;
  padding: 0.5em 1em;
  &:hover {
    cursor: pointer;
  }
`;

function History({ view, categories, setViewHistory }) {
  const handleHistory = () => {
    setViewHistory(false);
  };

  return (
    <>
      <Overlay view={view} onClick={handleHistory} />
      <NavBar className="animate__animated animate__fadeInLeft" view={view}>
        <h3 className="title-history">Historial de búsquedas</h3>
        <ContainerMenu>
          {categories.length > 0 &&
            categories.map((category) => (
              <ItemMenu key={category}>{category}</ItemMenu>
            ))}
        </ContainerMenu>

        {categories.length === 0 && <Warning message="Sin Búsquedas" />}
      </NavBar>
    </>
  );
}

History.propTypes = {
  setViewHistory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  view: PropTypes.bool.isRequired,
};

export default History;
