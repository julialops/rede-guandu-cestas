// =============================================
// Rede Guandu — Cestas Agroecológicas
// Google Apps Script (backend)
// =============================================

// Retorna o Spreadsheet ativo
function getSheet(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

// ===== INICIALIZAÇÃO =====
// Rode esta função UMA VEZ para criar as abas na planilha
function inicializar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Aba Produtores
  var prod = ss.getSheetByName('Produtores');
  if (!prod) {
    prod = ss.insertSheet('Produtores');
    prod.appendRow(['id', 'name']);
    // Dados iniciais
    var produtores = [
      ['cooperflora', 'Cooperflora — Assentamento Comuna da Terra'],
      ['cooperflora-avulsos', 'Cooperflora — Avulsos'],
      ['chef-helio', 'Delícias do Chef Hélio'],
      ['rede-guandu', 'Rede Guandu — Variados'],
      ['betins', 'Betins — Produção com Leite A2'],
      ['la-huertita', 'La Huertita — Horta'],
      ['la-catarina', 'La Catarina — Massas e Molhos'],
    ];
    produtores.forEach(function(r) { prod.appendRow(r); });
  }

  // Aba Produtos
  var produtos = ss.getSheetByName('Produtos');
  if (!produtos) {
    produtos = ss.insertSheet('Produtos');
    produtos.appendRow(['id', 'producerId', 'name', 'price']);
    // Cooperflora
    var items = [
      ['c1','cooperflora','Alface',6],['c2','cooperflora','Alho poró',6],
      ['c3','cooperflora','Banana',6],['c4','cooperflora','Berinjela',6],
      ['c5','cooperflora','Cenoura',6],['c6','cooperflora','Cheiro verde',6],
      ['c7','cooperflora','Chicória',6],['c8','cooperflora','Couve',6],
      ['c9','cooperflora','Mandioca com casca',6],['c10','cooperflora','Mandioca sem casca',9],
      ['c11','cooperflora','Ovo dz',18],['c12','cooperflora','Repolho',6],
      // Cooperflora Avulsos
      ['ca1','cooperflora-avulsos','Bolacha da vovó',15],['ca2','cooperflora-avulsos','Bolinho de chuva',15],
      ['ca3','cooperflora-avulsos','Bolo de cenoura c/ cobertura',30],['ca4','cooperflora-avulsos','Bolo de cenoura',25],
      ['ca5','cooperflora-avulsos','Bolo de fubá c/ erva doce',25],['ca6','cooperflora-avulsos','Bolo de laranja',30],
      ['ca7','cooperflora-avulsos','Bolo de mandioca',30],['ca8','cooperflora-avulsos','Bolo de milho',25],
      ['ca9','cooperflora-avulsos','Broa de fubá 100g',7],['ca10','cooperflora-avulsos','Broa de fubá 300g',15],
      ['ca11','cooperflora-avulsos','Colorau 100g',7],['ca12','cooperflora-avulsos','Colorau 150g',12],
      ['ca13','cooperflora-avulsos','Molho de pimenta 150ml',10],['ca14','cooperflora-avulsos','Pão comum',15],
      ['ca15','cooperflora-avulsos','Pão de beterraba',15],['ca16','cooperflora-avulsos','Pão de fubá',15],
      ['ca17','cooperflora-avulsos','Pão de mandioca',15],['ca18','cooperflora-avulsos','Pão integral',15],
      // Chef Hélio
      ['ch1','chef-helio','Cookie tradicional sem recheio',17],['ch2','chef-helio','Cookie ALL Black - Amargo sem recheio',17],
      ['ch3','chef-helio','Cookie Nutella Recheado',20],['ch4','chef-helio','Cookie Velvet Recheado',20],
      ['ch5','chef-helio','Cookie Pistache Recheado',20],['ch6','chef-helio','Cookie Kinder Recheado',20],
      ['ch7','chef-helio','Bolo de Pote Chocolatudo',22],['ch8','chef-helio','Bolo de Pote Chocolate e Maracujá',22],
      // Rede Guandu
      ['rg1','rede-guandu','Shimeji 200g (Moushi Cogumelos)',7.70],
      ['rg2','rede-guandu','Cogumelo shimeji orgânico 3kg (Moushi)',115.50],
      ['rg3','rede-guandu','Manteiga de cupuaçu vegana 250g (Sattva)',21.85],
      // Betins
      ['b1','betins','Requeijão Cremoso 500g',33],['b2','betins','Queijo meia cura 450g',41],
      ['b3','betins','Queijo Piracicabano 450g',45],['b4','betins','Queijo Colonial 400g',49],
      ['b5','betins','Queijo curado e temperado 350g',49],['b6','betins','Ricota c/ manjericão e salsinha 500g',36],
      ['b7','betins','Iogurte grego natural 220g',16],['b8','betins','Iogurte grego frutas vermelhas 220g',18],
      ['b9','betins','Iogurte grego limão siciliano 220g',17],['b10','betins','Iogurte garrafinha natural 500g',20],
      ['b11','betins','Coalhada síria c/ hortelã e azeite',18],['b12','betins','Doce de leite tradicional 280g',27],
      // La Huertita
      ['lh1','la-huertita','Alface crespa (mç)',6.60],['lh2','la-huertita','Couve (mç)',7.70],
      ['lh3','la-huertita','Rúcula (mç)',7.70],['lh4','la-huertita','Escarola (mç)',7.70],
      ['lh5','la-huertita','Alho poró (mç)',8.80],['lh6','la-huertita','Cebolinha (mç)',6.60],
      ['lh7','la-huertita','Cheiro verde (mç)',6.50],['lh8','la-huertita','Manjericão (mç)',6.50],
      ['lh9','la-huertita','Açafrão da Terra/Cúrcuma 50g',4],['lh10','la-huertita','Erva baleeira (mç)',6],
      ['lh11','la-huertita','Boldo do chile (mç)',4],['lh12','la-huertita','Cavalinha (mç)',6],
      ['lh13','la-huertita','Lavanda (mç)',7],['lh14','la-huertita','Abre caminhos (mç)',5],
      ['lh15','la-huertita','Folha de babosa (un)',5],['lh16','la-huertita','MIX chás (boldo, lavanda, baleeira)',8],
      ['lh17','la-huertita','PANC Mix (trevinho, almeirão roxo, guasca)',6.50],
      ['lh18','la-huertita','PANC Almeirão Roxo (mç)',6.50],['lh19','la-huertita','Taioba (mç)',8],
      ['lh20','la-huertita','PANC Trevinho (mç)',5],['lh21','la-huertita','PANC Folha de batata doce (mç)',5],
      ['lh22','la-huertita','PANC Caruru (mç)',4],['lh23','la-huertita','PANC Ora pro nobis flor rosa 40g',4],
      ['lh24','la-huertita','PANC Ora pro nobis flor branca (mç)',5],
      ['lh25','la-huertita','PANC Coração de banana (un)',10],['lh26','la-huertita','PANC Noni (fruto un)',4],
      // La Catarina
      ['lc1','la-catarina','Talharim de Alho Frito',18],['lc2','la-catarina','Talharim de Azeitonas Pretas',18],
      ['lc3','la-catarina','Talharim de Beterraba',17],['lc4','la-catarina','Talharim de Cenoura',18],
      ['lc5','la-catarina','Talharim de Chocolate c/ Pimenta',19],['lc6','la-catarina','Talharim de Ervas Finas',18],
      ['lc7','la-catarina','Talharim de Espinafre',17],['lc8','la-catarina','Talharim de Funghi Secchi',20],
      ['lc9','la-catarina','Talharim Integral',18],['lc10','la-catarina','Talharim de Limão Siciliano',19],
      ['lc11','la-catarina','Talharim Tradicional',16],['lc12','la-catarina','Talharim Vegano Tradicional',15],
      ['lc13','la-catarina','Talharim Vegano de Beterraba',16],['lc14','la-catarina','Talharim Vegano de Espinafre',16],
      ['lc15','la-catarina','Talharim Vegano Integral',17],
    ];
    items.forEach(function(r) { produtos.appendRow(r); });
  }

  // Aba Pedidos
  var pedidos = ss.getSheetByName('Pedidos');
  if (!pedidos) {
    pedidos = ss.insertSheet('Pedidos');
    pedidos.appendRow(['id', 'date', 'customerName', 'customerPhone', 'basket', 'basketName', 'items', 'total']);
  }

  // Aba Config
  var config = ss.getSheetByName('Config');
  if (!config) {
    config = ss.insertSheet('Config');
    config.appendRow(['key', 'value']);
    config.appendRow(['cycleOpen', 'true']);
    config.appendRow(['cycleName', 'Novembro 2026 — Ciclo 1']);
    config.appendRow(['adminPin', '']);
  }
}

// ===== API: GET =====
function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) || 'getAll';
    var result = {};

    if (action === 'getAll') {
      result = getAllData();
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getAllData() {
  // Produtores
  var prodSheet = getSheet('Produtores');
  var prodData = prodSheet.getDataRange().getValues();
  var producers = [];
  for (var i = 1; i < prodData.length; i++) {
    if (prodData[i][0]) {
      producers.push({ id: String(prodData[i][0]), name: String(prodData[i][1]), products: [] });
    }
  }

  // Produtos
  var itemSheet = getSheet('Produtos');
  var itemData = itemSheet.getDataRange().getValues();
  for (var i = 1; i < itemData.length; i++) {
    if (!itemData[i][0]) continue;
    var prod = { id: String(itemData[i][0]), name: String(itemData[i][2]), price: Number(itemData[i][3]) };
    var producerId = String(itemData[i][1]);
    var producer = producers.find(function(p) { return p.id === producerId; });
    if (producer) producer.products.push(prod);
  }

  // Pedidos
  var orderSheet = getSheet('Pedidos');
  var orderData = orderSheet.getDataRange().getValues();
  var orders = [];
  for (var i = 1; i < orderData.length; i++) {
    if (!orderData[i][0]) continue;
    var items = [];
    try { items = JSON.parse(orderData[i][6]); } catch(e) {}
    orders.push({
      id: String(orderData[i][0]),
      date: String(orderData[i][1]),
      customerName: String(orderData[i][2]),
      customerPhone: String(orderData[i][3]),
      basket: String(orderData[i][4]),
      basketName: String(orderData[i][5]),
      items: items,
      total: Number(orderData[i][7])
    });
  }

  // Config
  var configSheet = getSheet('Config');
  var configData = configSheet.getDataRange().getValues();
  var config = {};
  for (var i = 1; i < configData.length; i++) {
    config[String(configData[i][0])] = String(configData[i][1]);
  }

  return { producers: producers, orders: orders, config: config };
}

// ===== API: POST =====
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var action = body.action;
    var result = { ok: true };

    switch(action) {
      case 'addOrder':
        result = addOrder(body.data);
        break;
      case 'deleteOrder':
        result = deleteOrder(body.id);
        break;
      case 'clearOrders':
        result = clearOrders();
        break;
      case 'updateConfig':
        result = updateConfig(body.key, body.value);
        break;
      case 'addProducer':
        result = addProducer(body.data);
        break;
      case 'renameProducer':
        result = renameProducer(body.id, body.name);
        break;
      case 'removeProducer':
        result = removeProducer(body.id);
        break;
      case 'addProduct':
        result = addProduct(body.producerId, body.data);
        break;
      case 'removeProduct':
        result = removeProduct(body.producerId, body.productId);
        break;
      default:
        result = { ok: false, error: 'Unknown action: ' + action };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// --- Pedidos ---
function addOrder(data) {
  var sheet = getSheet('Pedidos');
  sheet.appendRow([
    data.id, data.date, data.customerName, data.customerPhone,
    data.basket, data.basketName, JSON.stringify(data.items), data.total
  ]);
  return { ok: true, id: data.id };
}

function deleteOrder(id) {
  var sheet = getSheet('Pedidos');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Order not found' };
}

function clearOrders() {
  var sheet = getSheet('Pedidos');
  var last = sheet.getLastRow();
  if (last > 1) {
    sheet.deleteRows(2, last - 1);
  }
  return { ok: true };
}

// --- Config ---
function updateConfig(key, value) {
  var sheet = getSheet('Config');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(key)) {
      sheet.getRange(i + 1, 2).setValue(value);
      return { ok: true };
    }
  }
  // Se a chave não existe, cria
  sheet.appendRow([key, value]);
  return { ok: true };
}

// --- Produtores ---
function addProducer(data) {
  var sheet = getSheet('Produtores');
  sheet.appendRow([data.id, data.name]);
  return { ok: true, id: data.id };
}

function renameProducer(id, name) {
  var sheet = getSheet('Produtores');
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, 2).setValue(name);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Producer not found' };
}

function removeProducer(id) {
  // Remove produtor
  var sheet = getSheet('Produtores');
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      break;
    }
  }
  // Remove seus produtos
  var prodSheet = getSheet('Produtos');
  var prodData = prodSheet.getDataRange().getValues();
  for (var i = prodData.length - 1; i >= 1; i--) {
    if (String(prodData[i][1]) === String(id)) {
      prodSheet.deleteRow(i + 1);
    }
  }
  return { ok: true };
}

// --- Produtos ---
function addProduct(producerId, data) {
  var sheet = getSheet('Produtos');
  sheet.appendRow([data.id, producerId, data.name, data.price]);
  return { ok: true, id: data.id };
}

function removeProduct(producerId, productId) {
  var sheet = getSheet('Produtos');
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0]) === String(productId) && String(data[i][1]) === String(producerId)) {
      sheet.deleteRow(i + 1);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Product not found' };
}
