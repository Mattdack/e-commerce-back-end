const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories include their associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((allCategory)=> {
    res.json(allCategory);
  }).catch((err) => {
    res.json(500).json({msg:"Issue acquiring category data from server.", err})
  })
});

// find one category by its `id` value include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [Product],
  }).then((oneCategory) => {
    res.json(oneCategory);
  }).catch((err) => {
    res.json(500).json({msg:"There was an error finding the category provided.", err})
  })
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then((data)=> {
    res.status(201).json(data);
  }).catch((err) => {
    res.status(500).json({msg:"There was an error storing the category that you provided.", err})
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
      id: req.params.id,
      },
    }
  ).then((updatedCategory) => {
    if(updatedCategory[0] === 0) {
      res.status(404).json({msg:"The supplied category was not found."}, err);
    }
    res.json(updatedCategory);
  }).catch((err) => {
    res.status(500).json({msg:"There was an error updating the category data.", err})
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((destroyedCategory) => {
    if(destroyedCategory === 0){
      res.status(404).json({msg:"The supplied category was not found.", err})
    }
    res.json(destroyedCategory);
  }).catch((err) => {
    res.status(500).json({msg:"There was an error deleting the category data.", err})
  })
});

module.exports = router;
