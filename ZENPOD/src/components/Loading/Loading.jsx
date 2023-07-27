import styled from "@emotion/styled";

const Loading = () => {

    const Loading = styled.div`
    margin:  0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border-radius: 9px;
    box-shadow: 1px 2px 3px;
  `

    return (
        <Loading>
  <img src='/assets/podcast.gif' alt="...Loading" width= '100px' />
        </Loading>
    )
}



export default Loading