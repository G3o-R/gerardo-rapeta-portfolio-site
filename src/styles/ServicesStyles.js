import styled from "styled-components";

export const StyledServicesSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: .75rem;
    max-width: 1560px;

`;

export const ServicesCardWrapper = styled.div`
height: 6.25em;
max-width: 27.5em;

&.start-up{
    height: 50rem;
}

&.standard{
    height: 59.375rem;
}

&.advanced{
    height: 65.625rem;
}

`;

export const ServicesCardContainer = styled.div`
    background-color: #064943;
    height: 100%;


`;

export const HeaderWrapper = styled.div`
text-align: left;
display: flex;
align-items: left;
height: 6.24rem;
&.start-up{
    background-color: #03A062;
}

&.standard{
    background: linear-gradient(270.07deg, #013A24 0.06%, #078453 99.94%);
}

&.advanced{
    background: linear-gradient(270.07deg, #132820 0.06%, #013A24 99.94%);
}


`;

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
margin: auto 10px;
gap: .5em;
img{
    height: 4rem;
    border-radius: 50%;
    
}

h2{
    height: auto;
    margin: 0;
}
`;

export const Services = styled.div`

`;

export const ServiceWrapper = styled.div`
    margin: 2.5rem 1.875rem;

`;

export const ServiceContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    align-items: center;

    &.align-right{
        /* display: none; */
        flex-direction: row;
    }

    &.row-reverse{

        flex-direction: row-reverse;
    }

    img{
        height: 6.25rem;
    }

`;

export const ImageContainer = styled.div`

`;

export const ImageWrapper = styled.div`

`;

export const DescriptionWrapper = styled.div`

`;

export const DescriptionContainer = styled.div`


&.pricing{
    text-align: left;
}

`;