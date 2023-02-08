const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it('Get all coffes with 1 array ', async() => {
            const testCafe = [{ id : 1, nombre: "Cafe de prueba"}]
            const res = await request(server).get("/cafes");
            expect(testCafe).toBeInstanceOf(Array);
            expect(res.statusCode).toEqual(200);
    })
    it("Add one coffe", async () => {
        const res = await request(server)
        .post("/cafes")
        .send({ id: 5, nombre: "Cafe de prueba"});
        expect(res.statusCode).toEqual(201);
    });
    it("Update id no exist", async () => {
        const res = await request(server)
        .put("/cafes/1999")
        .send({ nombre: "Cafe de prueba", id: 1999});
        expect(res.statusCode).toEqual(400);
    });
    it ("Delete one coffe, dont exist id", async () => {
        const res = await request(server)
        .delete("/cafes/100")
        .set('Authorization' , true);
        expect(res.statusCode).toEqual(404);
    });

});
