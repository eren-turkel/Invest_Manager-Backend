/*
AUTHOR: Eren Türkel
24.12.2022

EvaHomework

Users: Include User Name and his balance.

Shares: Include Share Name (3 CAPITAL LETTERS) and its rate.

Sells: Include current share market 
    ( 
      For example, Eren Türkel sells EvaCoin and total amount space for selling is 4569871.364
      
      Total Amount = 4569871.364 Dollars
      
      Share Name = ShareX
      Share Rate = 1.85  --> 1 ShareX equal to 1.85 Dollars

      i.e Eren Türkel sells (Total Amount / Share Rate) EvaCoin
      i.e Eren Türkel sells  4569871.364 / 1.85 EvaCoin

    )

  Transactions: Buying history
  (Eren Türkel bought 78922 x EvaCoin from Cem Şen)

*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.listen(3000, () => {});

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('evadb', 'root', 'eren.123456', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

const Users = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING
    },
    balance: {
      type: DataTypes.DECIMAL
    }
});

const Shares = sequelize.define('Share', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rate: {
      type: DataTypes.DECIMAL
    },
    shareName: {
      type: DataTypes.STRING
    }
});

const Sells = sequelize.define('Sell', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sellerId: {
      type: DataTypes.INTEGER
    },
    shareId: {
      type: DataTypes.INTEGER
    }
});

const Transactions = sequelize.define('Transaction', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sellerId: {
    type: DataTypes.INTEGER
  },
  sellId: {
    type: DataTypes.INTEGER
  },
  buyerId: {
    type: DataTypes.INTEGER
  },
  count: {
    type: DataTypes.INTEGER
  }
});

const userCreate = () => Users.bulkCreate([
  { userName: "Eren Türkel", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hasan Yılmaz", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Akif Topçu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Melike Şen", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Tuğrul Atıl", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hande Ataizi", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Cem Şen", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hakan Uygun", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Rıfkı Rıfkıoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Vehbi Koçoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },

  { userName: "Mehmet Türkel", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hasibe Otluoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Ceyda Sun", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Polat Usul", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Ufuk Tan", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Rıza Balcı", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hüseyin Van", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Jülide Ekber", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Merve Yurt", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Serpil Türkan", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },

  { userName: "Yurdakul Urtu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Yasin Okçu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Şekibe Kolcuoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Elif Avcı", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Aslı Ilıcan", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Tuğba Atan", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Suna Ayşe Aydın", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Recep Urartu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Deniz Hanım", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Yasemin Haklı", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },

  { userName: "Su Tüyanoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Yakup ÖNÜR", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Sıtkı Şah", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "İrem Bekçi", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Zeynep Nefise Nebi", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Bekir Kundakçı", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hasan Hüseyin Yurt", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Mehmet Türk", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Nazife Ok", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Kawa Zidan", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },

  { userName: "Bashar Islam", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Mohammad Barakat", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Akif Topçu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Nadina Omran", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Tuncay Etçi", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Hakim El Bekir", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Ali Yıldırım", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Ufuk Taşçın", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Halise Kurnaz", balance: Math.floor(1000 + Math.random() * 999999999)/1000 },
  { userName: "Sadık Kolaycıoğlu", balance: Math.floor(1000 + Math.random() * 999999999)/1000 }
]);

const random_share_id = () => {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
  var res = "";
  for(var i = 0; i < 3; i++) {
      var rnd = Math.floor(Math.random() * list.length);
      res = res + list.charAt(rnd);
  }
  return res;
}

const shareCreate = (shareCount) => {
  let data = [];
  for (let i = 0; i < shareCount; i++) {
    data.push({ rate: Math.floor(0 + Math.random() * 99999)/100, shareName: random_share_id() });
  }

  return Shares.bulkCreate(data);
}

const sellCreate = (sellCount) => {
  let data = [];

  let ids;

  return Users.findAll({
    attributes: ['id']
  })
  .then((userIds) => {
    ids = userIds.map(obj => obj.id);
    return Shares.findAll({
      attributes: ['id']
    })
  })
  .then((shareIds) => {
    shareIds = shareIds.map(obj => obj.id)
    for (let i = 0; i < sellCount; i++) {

      let sellerId = ids[Math.floor(Math.random() * ids.length)];

      data.push({ 
        value: Math.floor(0 + Math.random() * 9999999999)/1000,
        sellerId: sellerId, 
        shareId: shareIds[Math.floor(Math.random() * shareIds.length)]
      });
    }
  
    return Sells.bulkCreate(data);
  })
  .catch((err) => {
    return err;
  })
};

const initialize = () => {
    Users.destroy({ where: {}, truncate: true})
    .then(() => Shares.destroy({ where: {}, truncate: true}))
    .then(() => Sells.destroy({ where: {}, truncate: true}))
    .then(() => userCreate())
    .then(() => shareCreate(1000))
    .then(() => sellCreate(2000))
    .then(() => {
      console.log("Process completed successfully.")
      return true;
    })
    .catch((err) => {
        console.log(err);
    });
}

//initialize();

app.post('/buy', (req, res) => {
  let transactionObj = req.body;
  let shareObj, sellObj;
  let transactionAmount;// = transactionObj.count * shareObj.rate;
  
  // transactionAmount <= sell.dataValues.value && userBalance >= transactionAmount

  Shares.findOne({ //Get latest share
         where: { shareName: transactionObj.shareName },
         order: [ [ 'createdAt', 'DESC' ]],
       })
       .then((share) => {
         shareObj = share.dataValues;
         transactionAmount = transactionObj.count * shareObj.rate;
         return Sells.findByPk(transactionObj.sellId);
       })
       .then((sell) => {
         sellObj = sell.dataValues;
         return Users.findByPk(transactionObj.userId)
       })
       .then((userInfo) => {
         let userObj = userInfo.dataValues;
         if (transactionAmount > sellObj.value || transactionAmount > userObj.balance ){
           throw Error ('User balance is not enough.')
         }
         userObj.balance -= transactionAmount;
         sellObj.value -= transactionAmount; 
         return Promise.all(
          [
            Transactions.create({
              sellerId: sellObj.sellerId,
              sellId: sellObj.id,
              buyerId: userObj.id,
              count: transactionObj.count
            }),
            Users.update(
              { balance: userObj.balance },
              { where: { id: userObj.id } }
            ),
            Sells.update(
              { value: sellObj.value },
              { where: { id: sellObj.id } }
            )
          ]
         )
       })
       .then(() => {
         return res.send({
           result: "Purchased successfully!"
         });
       })
       .catch((err) => {
         return res.send({"error": err.message});
       })
});


app.post('/sell', (req, res) => {
    let sellObj = req.body;
    let userObj;
    let shareInfo;

    Users.findByPk(sellObj.userId)
    .then((user) => {
      userObj = user.dataValues;
      if (sellObj.value > userObj.balance) {
        throw Error('User balance is not enough!');
      }
      return Shares.findByPk(sellObj.shareId)
    })
    .then((share) => {
      shareInfo = share.dataValues;
      userObj.balance -= sellObj.value;
      return Promise.all([
        Sells.create({ value: sellObj.value, sellerId: userObj.id, shareId: shareInfo.id}),
        Users.update(
          { balance: userObj.balance },
          { where: { id: userObj.id } }
        ),
      ]) 
    })
    .then(() => {
      return res.send({
        result: "Put on market successfully!"
      });
    })
    .catch((err) => {
      return res.send({"error": err.message});
    })
});