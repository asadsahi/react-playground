let DB = require('../../db/models'),
    ContentText = DB.ContentText,
    Content = DB.Content,
    Language = DB.Language,
    errorHandler = require('../core/errorHandler');

/**
 * For site display purpose
 */
exports.list = async (req, res) => {
    var language = await Language.findOne({
        where: {
            locale: req.query.lang
        }
    });

    ContentText.findAll({
        include: [{
            model: DB.Content
        }],
        where: {
            languageid: language.id
        }
    }).then(list => {
        let response = {};

        list.forEach(item => {
            response[item.Content.key] = item.text;
        });

        res.json(response);
    }).catch(err => {
        if (err) return console.error(err);
        res.status(400).send(err);
    });
};


/**
 * For editing on admin content page
 */
exports.get = async (req, res) => {
    var language = await Language.findOne({
        where: {
            locale: req.params.locale
        }
    });

    ContentText.findAll({
        include: [{
            model: DB.Content
        }],
        where: {
            languageid: language.id
        }
    }).then(contentTextList => {
        let list = contentTextList.map(item => {
            return {
                id: item.id,
                text: item.text,
                contentKey: item.Content.key
            };
        });
        res.json(list);
    }).catch(err => {
        if (err) return console.error(err);
        res.status(400).send(err);
    });
};

/**
 * Edit single content
 */
exports.put = (req, res) => {
    ContentText.findOne({
        where: {
            id: req.body.id
        }
    }).then(contentText => {
        contentText.update({
            text: req.body.text
        }).then(updatedContentText => {
            res.json(updatedContentText);
        }).catch(err => res.status(400).send(errorHandler.formatMessage(err)));
    }).catch(err => res.status(400).send(errorHandler.formatMessage(err)));
}
