import styled from 'styled-components';

export const Menu = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 60px;
  background: ${(p) => p.theme.colorBackground};
  width: 100%;
  overflow: hidden;
  max-width: 290px;
  border: ${(p) => `1px solid ${p.theme.colorText}`};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DonateLink = styled.a`
  color: ${(p) => p.theme.colorText};
  text-decoration: none;
`;

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid grey;
  display: flex;
  place-items: center;
  justify-content: center;
`;

export const TitleLogo = styled.img`
  width: 3.5rem;
  margin-left: 40px;
  padding: 0;
`;

export const NavHeader = styled.h1`
  color: ${(p) => p.theme.colorText};
  font-size: 45px;
  margin-right: 40px;
  font-family: serif;
`;

export const MenuRow = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    color: ${(p) => p.theme.colorText};
`;

export const TypeButtons = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const NavButtonLeft = styled.button`
  padding: 10px;
  background-color: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  cursor: pointer;
  border-left: ${(p) => `1px solid ${p.theme.colorText}`};
  border-top: ${(p) => `1px solid ${p.theme.colorText}`};
  border-bottom: ${(p) => `1px solid ${p.theme.colorText}`};
  border-right: none;
  border-radius: 20px 0 0 20px;
`;

export const NavButtonRight = styled.button`
  padding: 10px;
  background-color: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  cursor: pointer;
  border-right: ${(p) => `1px solid ${p.theme.colorText}`};
  border-top: ${(p) => `1px solid ${p.theme.colorText}`};
  border-bottom: ${(p) => `1px solid ${p.theme.colorText}`};
  border-left: none;
  border-radius: 0px 20px 20px 0px;
`;
