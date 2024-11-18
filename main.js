const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();


  await page.goto('https://pay.diretopay.com/p/83780724766fad8a8d3d273-36239975');

  
  const nomeCompleto = faker.person.fullName();
  const email = faker.internet.email();
  const telefone = faker.phone.number('(##) ####-####');
  const cpf = faker.string.numeric(11);

  console.log('Preenchendo com os seguintes dados:');
  console.log(`Nome: ${nomeCompleto}`);
  console.log(`E-mail: ${email}`);
  console.log(`Telefone: ${telefone}`);
  console.log(`CPF: ${cpf}`);

  try {

    await page.waitForSelector('input[name="dados[nome]"]');
    await page.type('input[name="dados[nome]"]', nomeCompleto);

    await page.waitForSelector('input[name="dados[email]"]');
    await page.type('input[name="dados[email]"]', email);

    await page.waitForSelector('input[name="dados[telefone]"]');
    await page.type('input[name="dados[telefone]"]', telefone);

    await page.waitForSelector('input[name="dados[cpf]"]');
    await page.type('input[name="dados[cpf]"]', cpf);


    await page.waitForSelector('button.btn-success');
    await page.click('button.btn-success');

    console.log('Formulário preenchido com sucesso!');
  } catch (error) {
    console.error('Erro durante a automação:', error);
  }


  //await browser.close();
})();
