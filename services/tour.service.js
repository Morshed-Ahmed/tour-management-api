const Tours = require("../model/Tours");

exports.getToursService = async (queries) => {
  const result = await Tours.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.field)
    .sort(queries.sortBy);
  const total = await Tours.countDocuments();
  const count = Math.ceil(total / queries.limit);

  return { total, count, result };
};

exports.createTourService = async (data) => {
  const result = await Tours.create(data);
  return result;
};

exports.detailsTourService = async (id) => {
  const result = await Tours.findOne({ _id: id });
  return result;
};

exports.updateTourService = async (id, data) => {
  const result = await Tours.updateOne({ _id: id }, { $set: data });
  return result;
};
