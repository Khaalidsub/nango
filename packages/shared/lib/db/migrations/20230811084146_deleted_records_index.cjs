const tableName = '_nango_sync_data_records';

exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.index('created_at')
        table.index('updated_at');

        table.dropIndex('nango_connection_id');
        table.dropIndex('model');
        table.index(['nango_connection_id', 'model']);
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').table(tableName, function (table) {
        table.dropIndex('created_at');
        table.dropIndex('updated_at');

        table.dropIndex(['nango_connection_id', 'model']);
        table.index('nango_connection_id');
        table.index('model');
    });
};

