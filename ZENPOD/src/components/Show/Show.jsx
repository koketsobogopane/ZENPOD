import "./show.css"
import { faker } from "@faker-js/faker"
import styled from "@emotion/styled"
import { Card } from "@mui/material"


const Show = () =>{ 

    const Image = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 16px;
    `


const Header = styled.div`
   text-align: center;
   position: relative;
`

const Content = styled.div`
    margin: .5rem;
    margin-top: 1rem;
`

const List = styled.ul`
 list-style: none;
`
    return (
        <Content>
            <header>
                <Header>
                 <div className="image-card">   
                <Image src={faker.image.urlPicsumPhotos()} alt=""  className="image" />
                </div>

                <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                </Header>
                <section>
                   
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. 
                        Similique iusto itaque 
                        voluptate necessitatibus at. 
                        Odit, expedita adipisci! Repellendus, 
                        et molestiae quidem suscipit veritatis 
                        quae perspiciatis tempore minus. 
                        Quod, praesentium modi.</p>
                </section>
            </header>

            <main>
                <h4>Seasons</h4>
                < List>
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                    <Card sx={{mt:2, p:1}}>season</Card >
                </List>
            </main>
        </Content>
    )
}    

export default Show