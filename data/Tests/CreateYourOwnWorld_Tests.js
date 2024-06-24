const testGlobalVariableCoins = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('coins') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('coins'), 0, 'Global variable coins should be 0 at start');
    t.end();
}

const testListInventoryEmpty = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('inventory').length === 0, 1000);
    t.assert.equal(t.getGlobalVariable('inventory').length, 0, 'List inventory should be empty at start');
    t.end();
}

const testGlobalVariableRoom = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 1000);
    t.assert.equal(t.getGlobalVariable('room'), 1, 'Global variable room should be 1 at start');
    t.end();
}

const testPlayerCoordinates = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => {
        const player = t.getSprite('player');
        return player.x === -200 && player.y === 0;
    }, 1000);
    const player = t.getSprite('player');
    t.assert.equal(player.x, -200, 'Player x coordinate should be -200 at start');
    t.assert.equal(player.y, 0, 'Player y coordinate should be 0 at start');
    t.end();
}

const testStageCostume = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getStage().currentCostume.name === 'room1', 1000);
    t.assert.equal(t.getStage().currentCostume.name, 'room1', 'Stage costume should be room1 at start');
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableCoins,
		 name: "testGlobalVariableCoins",
		 description: "Test global variable coins is 0 at start",
		 categories: []
	},
	{
		 test: testListInventoryEmpty,
		 name: "testListInventoryEmpty",
		 description: "Test list inventory is empty at start",
		 categories: []
	},
	{
		 test: testGlobalVariableRoom,
		 name: "testGlobalVariableRoom",
		 description: "Test global variable room is 1 at start",
		 categories: []
	},
	{
		 test: testPlayerCoordinates,
		 name: "testPlayerCoordinates",
		 description: "Test player coordinates at start",
		 categories: []
	},
	{
		 test: testStageCostume,
		 name: "testStageCostume",
		 description: "Test stage costume at start",
		 categories: []
	},
]
