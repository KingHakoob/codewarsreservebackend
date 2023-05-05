import { Container, Row, Col } from "react-bootstrap";
import './KataCardComponent.css';

export default function KataCardComponent() {
    return (
        <Container className="kataCardComponent">
            <Row className="topRow">
                <Col sm={2}>
                    <h1 className="kataRank">6 Kyu</h1>
                </Col>
                <Col>
                    <h1 className="kataName">Kata Name Here</h1>
                    <h1 className="kataAuthor">Author Name Here</h1>
                    <button className="reserveBtn">Reserve Kata</button>
                </Col>
                <Col className="iconCol">
                    <div className="iconGroup">
                        <div className="iconSpacing">
                            <i className="fa-brands fa-square-js langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-brands fa-python langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                    </div>
                    <div className="iconGroup">
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="bottomRow">
                <Col>
                    <h1 className="descriptionTitle">Kata Description</h1>
                    <h1 className="kataDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium animi quo hic temporibus, eveniet ducimus sequi voluptatem voluptas voluptatum laboriosam nihil repudiandae consequuntur.</h1>
                </Col>
            </Row>
        </Container>
    );
}