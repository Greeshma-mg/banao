import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const members = [
  {
    img: image1,
    name: "Aarav ",
    desc: "Frontend Developer specializing in React and responsive UI design.",
  },
  {
    img: image2,
    name: "Edwin",
    desc: "Backend Developer skilled in Node.js, Express, and database design.",
  },
  {
    img: image3,
    name: "Kajal",
    desc: "UI/UX Designer focused on creating intuitive and clean user experiences.",
  },
  {
    img: image4,
    name: "Neha ",
    desc: "Full Stack Developer experienced in MERN stack and cloud deployment.",
  },
];

export default function GroupSection() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Team</h2>
        <Row>
          {members.map((m, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 text-center shadow-sm border-0">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={m.img}
                      className="team-img"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{m.name}</Card.Title>
                    <Card.Text>{m.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
