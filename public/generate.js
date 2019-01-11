var XAPjs = require('XAPjs');
var bip39 = require('bip39');
var qr = require('qr-image');
function generateWalletKeys(){
  let mnemonic = bip39.generateMnemonic()
  let seedBuffer = bip39.mnemonicToSeed(mnemonic)
  let masterNode = XAPjs.HDNode.fromSeedBuffer(seedBuffer)
  let account0 = masterNode.derivePath("m/44'/0'/0'")
  let xpubString = account0.neutered().toBase58()
  let key0 = account0.derivePath("0/0").keyPair
  let key0FromXpub = account0.neutered().derivePath("0/0").keyPair
  let address0 = key0.getAddress()
  let address0FromXpub = key0FromXpub.getAddress()
  var svg_string = qr.imageSync(address0, { type: 'svg' });
  document.getElementById('qrCode').innerHTML = svg_string;
  document.getElementById('test').innerHTML = address0
  document.getElementById('test1').innerHTML = key0.toWIF();
}
generateWalletKeys();
