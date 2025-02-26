ddescribe("Order Form Testi", () => {
  it("Anasayfa başlığını görüntüler", () => {
    cy.visit("http://localhost:3000"); 
    cy.contains("Teknolojik Yemekler").should("be.visible");
  });

  it("Sipariş formunu doldurur ve gönderir", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[type="radio"][value="Orta"]').check();
    cy.get("select").select("Klasik");
    cy.get('input[type="checkbox"]').check(["Pepperoni", "Soğan", "Mısır", "Sucuk"]);
    cy.get('input[placeholder="Adınızı giriniz (En az 3 karakter)"]').type("Ahmet");
    cy.contains("+").click();
    cy.get("button.siparis-ver").click();
    cy.url().should("include", "/success");
  });
});
