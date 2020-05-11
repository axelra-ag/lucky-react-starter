import React from "react";
import styled from "styled-components";
import MyImage, {AssetType} from "../views/Figure";

const Container = styled.div``;

export const Pictures = () => {
    return (
        <Container>
            <h2>Render images with custom React Components:)</h2>
            <MyImage
                source={"lion.jpg"}
                assetType={AssetType.IMAGE}
                style={{width: "100%", borderRadius: 5}}
            />
        </Container>
    );
};
