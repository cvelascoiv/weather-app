import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 20px;
  border-top: 8px solid orange;
  width: 300px;
  position: relative;
  font-size: 1.2rem;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
`;

export const CardContainerContent = styled.div`
  margin: 20px 0px;
  align-items: center;
`;

export const WeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const LocationContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const WeatherIconDescriptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  padding: 20px;
`;

export const CardContainerSpan = styled.span`
  margin: 4px;
  font-weight: bold;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  align-items: center;
`;
