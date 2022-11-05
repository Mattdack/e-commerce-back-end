const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product],
  }).then((allTag)=> {
    res.json(allTag);
  }).catch((err) => {
    res.json(500).json({msg:"Issue acquiring Tag data from server.", err})
  })
});

// find a single tag by its `id` include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [Product],
  }).then((oneTag) => {
    res.json(oneTag);
  }).catch((err) => {
    res.json(500).json({msg:"There was an error finding the Tag provided.", err})
  })
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  }).then((data)=> {
    res.status(201).json(data);
  }).catch((err) => {
    res.status(500).json({msg:"There was an error storing the tag that you provided.", err})
  })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
      id: req.params.id,
      },
    }
  ).then((updatedTag) => {
    if(updatedTag[0] === 0) {
      res.status(404).json({msg:"The supplied Tag was not found."}, err);
    }
    res.json(updatedTag);
  }).catch((err) => {
    res.status(500).json({msg:"There was an error updating the Tag data.", err})
  })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((destroyedTag) => {
    if(destroyedTag === 0){
      res.status(404).json({msg:"The supplied Tag was not found.", err})
    }
  }).catch((err) => {
    res.status(500).json({msg:"There was an error deleting the Tag data.", err})
  })
});

module.exports = router;
