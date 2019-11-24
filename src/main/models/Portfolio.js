'use strict';

const { Model } = require('objection');

class Portfolio extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'portfolio';
  }

  static get idColumn() {
    return ['id'];
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['description'],

      properties: {
        id: { type: 'integer' },
        pii: { type: 'integer' },
        grades: { type: 'integer' },
        description: { type: 'string' },
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {


    return {
    };
  }
}

module.exports = Portfolio;