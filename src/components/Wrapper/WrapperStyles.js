import styled from "styled-components";

export const WrapperContainer = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.black};
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 2px;
        top: -2px;
        background: white;
        border-radius: 100px;
}
`