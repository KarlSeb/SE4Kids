const testGlobalVariableCoins = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('coins') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('coins'), 0, 'Global variable coins should be 0 at the start');
    t.end();
}

const testListInventoryEmpty = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('inventory').length === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('inventory').length, 0, 'List inventory should be empty at the start');
    t.end();
}

const testGlobalVariableRoom = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    t.assert.strictEqual(t.getGlobalVariable('room'), 1, 'Global variable room should be 1 at the start');
    t.end();
}

const testPlayerCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const player = t.getSprite('player');
        return player.x === -200 && player.y === 0;
    }, 5000);
    const player = t.getSprite('player');
    t.assert.strictEqual(player.x, -200, 'Player should be at x = -200 at the start');
    t.assert.strictEqual(player.y, 0, 'Player should be at y = 0 at the start');
    t.end();
}

const testStageCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room1').index, 5000);
    t.assert.strictEqual(t.getStage().currentCostume, t.getStage().getCostumeByName('room1').index, "Stage should have costume 'room1' at the start");
    t.end();
}

const testPlayerMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const player = t.getSprite('player');
    const initialX = player.x;
    const initialY = player.y;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.ok(player.x > initialX || player.isTouchingColor([178, 178, 178]) || player.isTouchingEdge(), 'Player should move right unless touching edge or color [178, 178, 178]');
    t.keyRelease('right arrow');
    t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.ok(player.x < initialX || player.isTouchingColor([178, 178, 178]) || player.isTouchingEdge(), 'Player should move left unless touching edge or color [178, 178, 178]');
    t.keyRelease('left arrow');
    t.keyPress('up arrow');
    await t.runForTime(1000);
    t.assert.ok(player.y > initialY || player.isTouchingColor([178, 178, 178]) || player.isTouchingEdge(), 'Player should move up unless touching edge or color [178, 178, 178]');
    t.keyRelease('up arrow');
    t.keyPress('down arrow');
    await t.runForTime(1000);
    t.assert.ok(player.y < initialY || player.isTouchingColor([178, 178, 178]) || player.isTouchingEdge(), 'Player should move down unless touching edge or color [178, 178, 178]');
    t.keyRelease('down arrow');
    t.end();
}

const testStageCostumeChangeRoom1ToRoom2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room1').index, 5000);
    const player = t.getSprite('player');
    player.x = 240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([240, 152, 65]), 'Player should be touching color [240, 152, 65]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getStage().currentCostume, t.getStage().getCostumeByName('room2').index, "Stage costume should change to 'room2'");
    t.end();
}

const testStageCostumeChangeRoom2ToRoom3 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room2').index, 5000);
    const player = t.getSprite('player');
    player.x = 240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([240, 152, 65]), 'Player should be touching color [240, 152, 65]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getStage().currentCostume, t.getStage().getCostumeByName('room3').index, "Stage costume should change to 'room3'");
    t.end();
}

const testStageCostumeChangeRoom2ToRoom1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room2').index, 5000);
    const player = t.getSprite('player');
    player.x = -240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([254, 248, 85]), 'Player should be touching color [254, 248, 85]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getStage().currentCostume, t.getStage().getCostumeByName('room1').index, "Stage costume should change to 'room1'");
    t.end();
}

const testStageCostumeChangeRoom3ToRoom2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room3').index, 5000);
    const player = t.getSprite('player');
    player.x = -240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([254, 248, 85]), 'Player should be touching color [254, 248, 85]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getStage().currentCostume, t.getStage().getCostumeByName('room2').index, "Stage costume should change to 'room2'");
    t.end();
}

const testRoomIncreasesBy1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    const player = t.getSprite('player');
    player.x = 240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([240, 152, 65]), 'Player should be touching color [240, 152, 65]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getGlobalVariable('room'), 2, 'Room should increase by 1');
    t.end();
}

const testRoomDecreasesBy1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const player = t.getSprite('player');
    player.x = -240;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.ok(player.isTouchingColor([254, 248, 85]), 'Player should be touching color [254, 248, 85]');
    await t.runForTime(1000);
    t.assert.strictEqual(t.getGlobalVariable('room'), 1, 'Room should decrease by 1');
    t.end();
}

const testWelcomeSignVisibilityAndText = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    const welcomeSign = t.getSprite('welcome sign');
    t.assert.ok(welcomeSign.visible, 'Welcome sign should be visible if room is 1');
    const player = t.getSprite('player');
    player.x = welcomeSign.x;
    player.y = welcomeSign.y;
    await t.runForTime(1000);
    t.assert.strictEqual(welcomeSign.sayText, 'Welcome! Can you get to the treasure?', "Welcome sign should say 'Welcome! Can you get to the treasure?' when player is touching it");
    player.x = 0;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.strictEqual(welcomeSign.sayText, '', "Welcome sign should say '' when player is not touching it");
    t.end();
}

const testCoinVisibilityAndIncrease = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    const coin = t.getSprite('coin');
    t.assert.ok(coin.visible, 'Coin should be visible if room is 1');
    const player = t.getSprite('player');
    player.x = coin.x;
    player.y = coin.y;
    await t.runForTime(1000);
    t.assert.strictEqual(t.getGlobalVariable('coins'), 1, 'Coins should increase by 1 when player touches the coin');
    t.assert.notOk(coin.visible, 'Coin should become invisible after being touched');
    t.end();
}

const testPersonVisibilityAndCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    const person = t.getSprite('person');
    t.assert.ok(person.visible, 'Person should be visible if room is 1');
    t.assert.strictEqual(person.x, 0, 'Person should start at x = 0');
    t.assert.strictEqual(person.y, -160, 'Person should start at y = -160');
    t.end();
}

const testPersonTextAndMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 1, 5000);
    const person = t.getSprite('person');
    const player = t.getSprite('player');
    player.x = person.x;
    player.y = person.y;
    await t.runForTime(1000);
    t.assert.strictEqual(person.sayText, 'Did you know that you can go through orange and yellow doors?', "Person should say 'Did you know that you can go through orange and yellow doors?' when player touches it");
    player.x = 0;
    player.y = 0;
    await t.runForTime(1000);
    t.assert.strictEqual(person.sayText, '', "Person should say '' when player is not touching it");
    const initialX = person.x;
    await t.runForTime(1000);
    t.assert.notStrictEqual(person.x, initialX, 'Person should move along x axis');
    t.end();
}

const testPlayerTouchesPerson = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('person').sayText === 'Did you know that you can go through orange and yellow doors?', 5000);
    t.assert.equal(t.getSprite('person').sayText, 'Did you know that you can go through orange and yellow doors?', 'Person should say the message when touched by player');
    t.end();
}

const testPersonTouchesEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const person = t.getSprite('person');
    const initialDirection = person.direction;
    await t.runUntil(() => person.isTouchingEdge(), 5000);
    t.assert.notEqual(person.direction, initialDirection, 'Person should change direction when touching the edge');
    t.end();
}

const testEnemySignVisibilityAndMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const enemySign = t.getSprite('enemy sign');
    t.assert.ok(enemySign.visible, 'Enemy sign should be visible in room 2');
    await t.runUntil(() => t.getSprite('player').isTouchingSprite('enemy sign'), 5000);
    t.assert.equal(enemySign.sayText, 'Avoid the patrolling enemies!', 'Enemy sign should say the message when touched by player');
    t.end();
}

const testEnemyVisibilityAndStartingCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const enemy = t.getSprite('enemy');
    t.assert.ok(enemy.visible, 'Enemy should be visible in room 2');
    t.assert.equal(enemy.x, -170, 'Enemy should start at x coordinate -170');
    t.assert.equal(enemy.y, 0, 'Enemy should start at y coordinate 0');
    t.end();
}

const testEnemyMovesLeftAndRight = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const enemy = t.getSprite('enemy');
    const initialX = enemy.x;
    await t.runForTime(2000);
    t.assert.notEqual(enemy.x, initialX, 'Enemy should move left and right');
    t.end();
}

const testEnemyTouchesPlayerAndSaysMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    await t.runUntil(() => t.getSprite('enemy').isTouchingSprite('player'), 5000);
    t.assert.equal(t.getSprite('enemy').sayText, 'Gotcha!', 'Enemy should say Gotcha! when touching player');
    t.end();
}

const testCoin2VisibilityAndPlayerInteraction = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const coin2 = t.getSprite('coin2');
    t.assert.ok(coin2.visible, 'Coin2 should be visible in room 2');
    await t.runUntil(() => t.getSprite('player').isTouchingSprite('coin2'), 5000);
    t.assert.equal(t.getGlobalVariable('coins'), 1, 'Coins should increase by 1 when player touches coin2');
    t.end();
}

const testDoorSignVisibilityAndMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const doorSign = t.getSprite('door sign');
    t.assert.ok(doorSign.visible, 'Door sign should be visible in room 3');
    await t.runUntil(() => t.getSprite('player').isTouchingSprite('door sign'), 5000);
    t.assert.equal(doorSign.sayText, 'You\'ll need a blue key to open this door!', 'Door sign should say the message when touched by player');
    t.end();
}

const testEnemy2VisibilityAndStartingCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const enemy2 = t.getSprite('enemy2');
    t.assert.ok(enemy2.visible, 'Enemy2 should be visible in room 3');
    t.assert.equal(enemy2.x, -5, 'Enemy2 should start at x coordinate -5');
    t.assert.equal(enemy2.y, -90, 'Enemy2 should start at y coordinate -90');
    t.end();
}

const testEnemy2MovesUpAndDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const enemy2 = t.getSprite('enemy2');
    const initialY = enemy2.y;
    await t.runForTime(2000);
    t.assert.notEqual(enemy2.y, initialY, 'Enemy2 should move up and down');
    t.end();
}

const testEnemy2TouchesPlayerAndSaysMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => t.getSprite('enemy2').isTouchingSprite('player'), 5000);
    t.assert.equal(t.getSprite('enemy2').sayText, 'Gotcha!', 'Enemy2 should say Gotcha! when touching player');
    t.end();
}

const testKeyBlueVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const keyBlue = t.getSprite('key-blue');
    t.assert.ok(keyBlue.visible, 'Key-blue should be visible in room 3');
    t.end();
}

const testPlayerTouchesKeyBlueAndUpdatesInventory = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => t.getSprite('player').isTouchingSprite('key-blue'), 5000);
    t.assert.equal(t.getGlobalVariable('coins'), 3, 'Coins should increase by 3 when player touches key-blue');
    t.assert.ok(t.getGlobalVariable('inventory').includes('blue key'), 'Blue key should be added to inventory when player touches key-blue');
    t.end();
}

const testDoorBlueVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const doorBlue = t.getSprite('door-blue');
    t.assert.ok(doorBlue.visible, 'Door-blue should be visible in room 3');
    t.end();
}

const testDoorBlueBecomesInvisibleWithBlueKey = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => t.getGlobalVariable('inventory').includes('blue key'), 5000);
    const doorBlue = t.getSprite('door-blue');
    t.assert.notOk(doorBlue.visible, 'Door-blue should become invisible when blue key is in inventory');
    t.end();
}

const testChestVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const chest = t.getSprite('chest');
    t.assert.ok(chest.visible, 'Chest should be visible in room 3');
    t.end();
}

const testPlayerTouchesChestAndGameEnds = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => t.getSprite('player').isTouchingSprite('chest'), 5000);
    t.assert.equal(t.getSprite('chest').sayText, 'Well done!', 'Chest should say Well done! when touched by player');
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableCoins,
		 name: "testGlobalVariableCoins",
		 description: "Global variable coins is 0 at the start",
		 categories: []
	},
	{
		 test: testListInventoryEmpty,
		 name: "testListInventoryEmpty",
		 description: "List inventory is empty at the start",
		 categories: []
	},
	{
		 test: testGlobalVariableRoom,
		 name: "testGlobalVariableRoom",
		 description: "Global variable room is 1 at the start",
		 categories: []
	},
	{
		 test: testPlayerCoordinates,
		 name: "testPlayerCoordinates",
		 description: "Player is at coordinates (-200, 0) at the start",
		 categories: []
	},
	{
		 test: testStageCostume,
		 name: "testStageCostume",
		 description: "Stage has costume 'room1' at the start",
		 categories: []
	},
	{
		 test: testPlayerMovement,
		 name: "testPlayerMovement",
		 description: "Player moves in respective direction when arrow key is pressed unless touching edge or color [178, 178, 178]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom1ToRoom2,
		 name: "testStageCostumeChangeRoom1ToRoom2",
		 description: "Stage costume changes to 'room2' when player is at center of right edge in 'room1' and touches color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom2ToRoom3,
		 name: "testStageCostumeChangeRoom2ToRoom3",
		 description: "Stage costume changes to 'room3' when player is at center of right edge in 'room2' and touches color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom2ToRoom1,
		 name: "testStageCostumeChangeRoom2ToRoom1",
		 description: "Stage costume changes to 'room1' when player is at center of left edge in 'room2' and touches color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom3ToRoom2,
		 name: "testStageCostumeChangeRoom3ToRoom2",
		 description: "Stage costume changes to 'room2' when player is at center of left edge in 'room3' and touches color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testRoomIncreasesBy1,
		 name: "testRoomIncreasesBy1",
		 description: "Room increases by 1 when player touches color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testRoomDecreasesBy1,
		 name: "testRoomDecreasesBy1",
		 description: "Room decreases by 1 when player touches color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testWelcomeSignVisibilityAndText,
		 name: "testWelcomeSignVisibilityAndText",
		 description: "Welcome sign is only visible if room is 1 and says 'Welcome! Can you get to the treasure?' when player is touching it, otherwise it says ''",
		 categories: []
	},
	{
		 test: testCoinVisibilityAndIncrease,
		 name: "testCoinVisibilityAndIncrease",
		 description: "Coin is only visible if room is 1, increases coins by 1 when player touches it, and becomes invisible after being touched",
		 categories: []
	},
	{
		 test: testPersonVisibilityAndCoordinates,
		 name: "testPersonVisibilityAndCoordinates",
		 description: "Person is only visible if room is 1 and starts at coordinates (0, -160)",
		 categories: []
	},
	{
		 test: testPersonTextAndMovement,
		 name: "testPersonTextAndMovement",
		 description: "Person says 'Did you know that you can go through orange and yellow doors?' when player touches it, otherwise says '' and moves along x axis",
		 categories: []
	},
	{
		 test: testPlayerTouchesPerson,
		 name: "testPlayerTouchesPerson",
		 description: "Player touches person and person says message",
		 categories: []
	},
	{
		 test: testPersonTouchesEdge,
		 name: "testPersonTouchesEdge",
		 description: "Person touches edge and changes direction",
		 categories: []
	},
	{
		 test: testEnemySignVisibilityAndMessage,
		 name: "testEnemySignVisibilityAndMessage",
		 description: "Enemy sign visibility and message",
		 categories: []
	},
	{
		 test: testEnemyVisibilityAndStartingCoordinates,
		 name: "testEnemyVisibilityAndStartingCoordinates",
		 description: "Enemy visibility and starting coordinates",
		 categories: []
	},
	{
		 test: testEnemyMovesLeftAndRight,
		 name: "testEnemyMovesLeftAndRight",
		 description: "Enemy moves left and right",
		 categories: []
	},
	{
		 test: testEnemyTouchesPlayerAndSaysMessage,
		 name: "testEnemyTouchesPlayerAndSaysMessage",
		 description: "Enemy touches player and says message",
		 categories: []
	},
	{
		 test: testCoin2VisibilityAndPlayerInteraction,
		 name: "testCoin2VisibilityAndPlayerInteraction",
		 description: "Coin2 visibility and player interaction",
		 categories: []
	},
	{
		 test: testDoorSignVisibilityAndMessage,
		 name: "testDoorSignVisibilityAndMessage",
		 description: "Door sign visibility and message",
		 categories: []
	},
	{
		 test: testEnemy2VisibilityAndStartingCoordinates,
		 name: "testEnemy2VisibilityAndStartingCoordinates",
		 description: "Enemy2 visibility and starting coordinates",
		 categories: []
	},
	{
		 test: testEnemy2MovesUpAndDown,
		 name: "testEnemy2MovesUpAndDown",
		 description: "Enemy2 moves up and down",
		 categories: []
	},
	{
		 test: testEnemy2TouchesPlayerAndSaysMessage,
		 name: "testEnemy2TouchesPlayerAndSaysMessage",
		 description: "Enemy2 touches player and says message",
		 categories: []
	},
	{
		 test: testKeyBlueVisibility,
		 name: "testKeyBlueVisibility",
		 description: "Key-blue visibility",
		 categories: []
	},
	{
		 test: testPlayerTouchesKeyBlueAndUpdatesInventory,
		 name: "testPlayerTouchesKeyBlueAndUpdatesInventory",
		 description: "Player touches key-blue and updates inventory",
		 categories: []
	},
	{
		 test: testDoorBlueVisibility,
		 name: "testDoorBlueVisibility",
		 description: "Door-blue visibility",
		 categories: []
	},
	{
		 test: testDoorBlueBecomesInvisibleWithBlueKey,
		 name: "testDoorBlueBecomesInvisibleWithBlueKey",
		 description: "Door-blue becomes invisible with blue key",
		 categories: []
	},
	{
		 test: testChestVisibility,
		 name: "testChestVisibility",
		 description: "Chest visibility",
		 categories: []
	},
	{
		 test: testPlayerTouchesChestAndGameEnds,
		 name: "testPlayerTouchesChestAndGameEnds",
		 description: "Player touches chest and game ends",
		 categories: []
	},
]
