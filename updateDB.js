// sequelize 생성
const Sequelize = require("sequelize");

// DB 정보, commit 시에는 임시로 지움
const sequelize = new Sequelize("database", "username", "password", {
    host: "host",
    dialect: "mysql"|"spqlite"|"postgres"|"mssql",
    define: {
        //freezeTableName: true,
        //timestamps: false
    }
});

// DB 연동
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to database:', err);
});

// PRB entity 연결
const PRB = sequelize.define('PRB', {
    PRB_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    PRB_DIFF: {
        type: Sequelize.TINYINT(1).UNSIGNED
    },
    PRB_CLS: {
        type: Sequelize.STRING(10)
    },
    PRB_NM: {
        type: Sequelize.STRING(20)
    },
    PRB_CNT: {
        type: Sequelize.STRING(500)
    },
    PRB_HNT: {
        type: Sequelize.STRING(500)
    },
    PRB_RTN: {
        type: Sequelize.INTEGER
    },
    PRB_CD: {
        type: Sequelize.STRING(5000)
    },
    PRB_XML: {
        type: Sequelize.STRING(10000),
        allowNull: false
    }
});

// ATP entity 연결
const ATP = sequelize.define('ATP', {
    ATP_PID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ATP_TID: {
        type: Sequelize.TINYINT(1).UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    ATP_IN: {
        type: Sequelize.STRING(100)
    },
    ATP_OUT: {
        type: Sequelize.STRING(500)
    }
});

function testUpdate() {
    testID = 1;

    PRB.findAll({
        attributes: ['PRB_CD'],
        where: {
            PRB_ID: testID
        }
    }).then(testCode => {
        console.log(testCode[0].dataValues.PRB_CD);
    }).catch(err => {
        console.log(err);
    });
}

testUpdate();