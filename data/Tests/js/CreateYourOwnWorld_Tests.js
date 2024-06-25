const testGlobalVariableCoins = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('coins') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('coins'), 0, 'Global variable coins should be 0 at the start');
    t.end();
}

const testInventoryListEmpty = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('inventory').length === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('inventory').length, 0, "List 'inventory' should be empty at the start");
    t.end();
}

const testGlobalVariableRoom = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('room') === '1', 5000);
    t.assert.strictEqual(t.getGlobalVariable('room'), '1', 'Global variable room should be 1 at the start');
    t.end();
}

const testPlayerStartCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = await t.runUntil(() => {
        const p = t.getSprite('player');
        return p.x === -200 && p.y === 0;
    }, 5000);
    t.assert.strictEqual(player.x, -200, 'Player should start at x = -200');
    t.assert.strictEqual(player.y, 0, 'Player should start at y = 0');
    t.end();
}

const testStageCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = await t.runUntil(() => t.getStage().currentCostume === 'room1', 5000);
    t.assert.strictEqual(stage.currentCostume, 'room1', 'Stage should have costume room1 at the start');
    t.end();
}

const testPlayerMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const initialX = player.x;
    const initialY = player.y;

    t.keyPress('right');
    await t.runForTime(1000);
    t.assert.ok(player.x > initialX, 'Player should move right when right arrow key is pressed');

    t.keyPress('left');
    await t.runForTime(1000);
    t.assert.ok(player.x < initialX, 'Player should move left when left arrow key is pressed');

    t.keyPress('up');
    await t.runForTime(1000);
    t.assert.ok(player.y > initialY, 'Player should move up when up arrow key is pressed');

    t.keyPress('down');
    await t.runForTime(1000);
    t.assert.ok(player.y < initialY, 'Player should move down when down arrow key is pressed');

    t.end();
}

const testStageCostumeChangeRoom1ToRoom2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const stage = t.getStage();

    player.x = 240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([240, 152, 65]), 5000);
    t.assert.strictEqual(stage.currentCostume, 'room2', 'Stage costume should change to room2');
    t.end();
}

const testStageCostumeChangeRoom2ToRoom3 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const stage = t.getStage();

    player.x = 240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([240, 152, 65]), 5000);
    t.assert.strictEqual(stage.currentCostume, 'room3', 'Stage costume should change to room3');
    t.end();
}

const testStageCostumeChangeRoom2ToRoom1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const stage = t.getStage();

    player.x = -240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([254, 248, 85]), 5000);
    t.assert.strictEqual(stage.currentCostume, 'room1', 'Stage costume should change to room1');
    t.end();
}

const testStageCostumeChangeRoom3ToRoom2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const stage = t.getStage();

    player.x = -240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([254, 248, 85]), 5000);
    t.assert.strictEqual(stage.currentCostume, 'room2', 'Stage costume should change to room2');
    t.end();
}

const testRoomIncreasesBy1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const initialRoom = t.getGlobalVariable('room');

    player.x = 240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([240, 152, 65]), 5000);
    t.assert.strictEqual(t.getGlobalVariable('room'), initialRoom + 1, 'Room should increase by 1');
    t.end();
}

const testRoomDecreasesBy1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const initialRoom = t.getGlobalVariable('room');

    player.x = -240;
    player.y = 0;
    await t.runUntil(() => player.isTouchingColor([254, 248, 85]), 5000);
    t.assert.strictEqual(t.getGlobalVariable('room'), initialRoom - 1, 'Room should decrease by 1');
    t.end();
}

const testWelcomeSignVisibilityAndText = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const welcomeSign = t.getSprite('welcome sign');

    await t.runUntil(() => t.getGlobalVariable('room') === '1', 5000);
    t.assert.ok(welcomeSign.visible, 'Welcome sign should be visible in room 1');

    t.dragSprite('player', welcomeSign.x, welcomeSign.y);
    await t.runForTime(1000);
    t.assert.strictEqual(welcomeSign.sayText, 'Welcome! Can you get to the treasure?', 'Welcome sign should say the welcome message when player is touching it');

    t.dragSprite('player', welcomeSign.x + 50, welcomeSign.y + 50);
    await t.runForTime(1000);
    t.assert.strictEqual(welcomeSign.sayText, '', 'Welcome sign should say nothing when player is not touching it');

    t.end();
}

const testCoinVisibilityAndCollection = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const coin = t.getSprite('coin');
    const initialCoins = t.getGlobalVariable('coins');

    await t.runUntil(() => t.getGlobalVariable('room') === '1', 5000);
    t.assert.ok(coin.visible, 'Coin should be visible in room 1');

    t.dragSprite('player', coin.x, coin.y);
    await t.runForTime(1000);
    t.assert.strictEqual(t.getGlobalVariable('coins'), initialCoins + 1, 'Coins should increase by 1 when player touches the coin');
    t.assert.notOk(coin.visible, 'Coin should become invisible after being touched');

    t.end();
}

const testPersonVisibilityAndStartCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const person = t.getSprite('person');

    await t.runUntil(() => t.getGlobalVariable('room') === '1', 5000);
    t.assert.ok(person.visible, 'Person should be visible in room 1');
    t.assert.strictEqual(person.x, 0, 'Person should start at x = 0');
    t.assert.strictEqual(person.y, -160, 'Person should start at y = -160');

    t.end();
}

const testPersonInteractionAndMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const person = t.getSprite('person');

    t.dragSprite('player', person.x, person.y);
    await t.runForTime(1000);
    t.assert.strictEqual(person.sayText, 'Did you know that you can go through orange and yellow doors?', 'Person should say the message when player touches them');

    t.dragSprite('player', person.x + 50, person.y + 50);
    await t.runForTime(1000);
    t.assert.strictEqual(person.sayText, '', 'Person should say nothing when player is not touching them');

    const initialX = person.x;
    await t.runForTime(1000);
    t.assert.notStrictEqual(person.x, initialX, 'Person should move along the x axis');

    t.end();
}

const testPlayerTouchesPerson = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const player = t.getSprite('player');
    const person = t.getSprite('person');
    await t.runUntil(() => player.isTouchingSprite('person'), 5000);
    t.assert.equal(person.sayText, 'Did you know that you can go through orange and yellow doors?', 'Person should say the correct message when touched by player');
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
    const enemySign = t.getSprite('enemy sign');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    t.assert.ok(enemySign.visible, 'Enemy sign should be visible in room 2');
    await t.runUntil(() => player.isTouchingSprite('enemy sign'), 5000);
    t.assert.equal(enemySign.sayText, 'Avoid the patrolling enemies!', 'Enemy sign should say the correct message when touched by player');
    t.end();
}

const testEnemyVisibilityAndStartingCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy = t.getSprite('enemy');
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    t.assert.ok(enemy.visible, 'Enemy should be visible in room 2');
    t.assert.equal(enemy.x, -170, 'Enemy should start at x coordinate -170');
    t.assert.equal(enemy.y, 0, 'Enemy should start at y coordinate 0');
    t.end();
}

const testEnemyMovesLeftAndRight = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy = t.getSprite('enemy');
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    const initialX = enemy.x;
    await t.runForTime(2000);
    t.assert.notEqual(enemy.x, initialX, 'Enemy should move left and right');
    t.end();
}

const testEnemyTouchesPlayerAndSaysMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy = t.getSprite('enemy');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    await t.runUntil(() => enemy.isTouchingSprite('player'), 5000);
    t.assert.equal(enemy.sayText, 'Gotcha!', 'Enemy should say Gotcha! when touching player');
    t.end();
}

const testCoin2VisibilityAndPlayerTouchesCoin2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const coin2 = t.getSprite('coin2');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 2, 5000);
    t.assert.ok(coin2.visible, 'Coin2 should be visible in room 2');
    const initialCoins = t.getGlobalVariable('coins');
    await t.runUntil(() => player.isTouchingSprite('coin2'), 5000);
    t.assert.equal(t.getGlobalVariable('coins'), initialCoins + 1, 'Coins should increase by 1 when player touches coin2');
    t.end();
}

const testDoorSignVisibilityAndMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const doorSign = t.getSprite('door sign');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.assert.ok(doorSign.visible, 'Door sign should be visible in room 3');
    await t.runUntil(() => player.isTouchingSprite('door sign'), 5000);
    t.assert.equal(doorSign.sayText, 'You\'ll need a blue key to open this door!', 'Door sign should say the correct message when touched by player');
    t.end();
}

const testEnemy2VisibilityAndStartingCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy2 = t.getSprite('enemy2');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.assert.ok(enemy2.visible, 'Enemy2 should be visible in room 3');
    t.assert.equal(enemy2.x, -5, 'Enemy2 should start at x coordinate -5');
    t.assert.equal(enemy2.y, -90, 'Enemy2 should start at y coordinate -90');
    t.end();
}

const testEnemy2MovesUpAndDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy2 = t.getSprite('enemy2');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const initialY = enemy2.y;
    await t.runForTime(2000);
    t.assert.notEqual(enemy2.y, initialY, 'Enemy2 should move up and down');
    t.end();
}

const testEnemy2TouchesPlayerAndSaysMessage = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const enemy2 = t.getSprite('enemy2');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => enemy2.isTouchingSprite('player'), 5000);
    t.assert.equal(enemy2.sayText, 'Gotcha!', 'Enemy2 should say Gotcha! when touching player');
    t.end();
}

const testKeyBlueVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const keyBlue = t.getSprite('key-blue');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.assert.ok(keyBlue.visible, 'Key-blue should be visible in room 3');
    t.end();
}

const testPlayerTouchesKeyBlueAndIncreasesCoins = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const keyBlue = t.getSprite('key-blue');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    const initialCoins = t.getGlobalVariable('coins');
    await t.runUntil(() => player.isTouchingSprite('key-blue'), 5000);
    t.assert.equal(t.getGlobalVariable('coins'), initialCoins + 3, 'Coins should increase by 3 when player touches key-blue');
    t.assert.ok(t.getGlobalVariable('inventory').includes('blue key'), 'Blue key should be added to inventory');
    t.end();
}

const testDoorBlueVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const doorBlue = t.getSprite('door-blue');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.assert.ok(doorBlue.visible, 'Door-blue should be visible in room 3');
    t.end();
}

const testDoorBlueBecomesInvisibleWithBlueKey = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const doorBlue = t.getSprite('door-blue');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.getGlobalVariable('inventory').push('blue key');
    await t.runForTime(1000);
    t.assert.notOk(doorBlue.visible, 'Door-blue should become invisible when blue key is in inventory');
    t.end();
}

const testChestVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const chest = t.getSprite('chest');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    t.assert.ok(chest.visible, 'Chest should be visible in room 3');
    t.end();
}

const testPlayerTouchesChestAndGameEnds = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const chest = t.getSprite('chest');
    const player = t.getSprite('player');
    await t.runUntil(() => t.getGlobalVariable('room') === 3, 5000);
    await t.runUntil(() => player.isTouchingSprite('chest'), 5000);
    t.assert.equal(chest.sayText, 'Well done!', 'Chest should say Well done! when touched by player');
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
		 test: testInventoryListEmpty,
		 name: "testInventoryListEmpty",
		 description: "List 'inventory' is empty at the start",
		 categories: []
	},
	{
		 test: testGlobalVariableRoom,
		 name: "testGlobalVariableRoom",
		 description: "Global variable room is '1' at the start",
		 categories: []
	},
	{
		 test: testPlayerStartCoordinates,
		 name: "testPlayerStartCoordinates",
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
		 description: "Player moves in the respective direction when an arrow key is pressed unless they touch the edge of the stage or the color [178, 178, 178]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom1ToRoom2,
		 name: "testStageCostumeChangeRoom1ToRoom2",
		 description: "Stage costume changes to 'room2' when player is at the center of the right edge of the stage in 'room1' and touches the color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom2ToRoom3,
		 name: "testStageCostumeChangeRoom2ToRoom3",
		 description: "Stage costume changes to 'room3' when player is at the center of the right edge of the stage in 'room2' and touches the color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom2ToRoom1,
		 name: "testStageCostumeChangeRoom2ToRoom1",
		 description: "Stage costume changes to 'room1' when player is at the center of the left edge of the stage in 'room2' and touches the color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testStageCostumeChangeRoom3ToRoom2,
		 name: "testStageCostumeChangeRoom3ToRoom2",
		 description: "Stage costume changes to 'room2' when player is at the center of the left edge of the stage in 'room3' and touches the color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testRoomIncreasesBy1,
		 name: "testRoomIncreasesBy1",
		 description: "Room increases by 1 when player touches the color [240, 152, 65]",
		 categories: []
	},
	{
		 test: testRoomDecreasesBy1,
		 name: "testRoomDecreasesBy1",
		 description: "Room decreases by 1 when player touches the color [254, 248, 85]",
		 categories: []
	},
	{
		 test: testWelcomeSignVisibilityAndText,
		 name: "testWelcomeSignVisibilityAndText",
		 description: "Welcome sign is only visible if room is 1 and says 'Welcome! Can you get to the treasure?' when player is touching it, otherwise it says ''",
		 categories: []
	},
	{
		 test: testCoinVisibilityAndCollection,
		 name: "testCoinVisibilityAndCollection",
		 description: "Coin is only visible if room is '1', increases coins by 1 when player touches it, and becomes invisible after being touched",
		 categories: []
	},
	{
		 test: testPersonVisibilityAndStartCoordinates,
		 name: "testPersonVisibilityAndStartCoordinates",
		 description: "Person is only visible if room is '1' and starts at coordinates (0, -160)",
		 categories: []
	},
	{
		 test: testPersonInteractionAndMovement,
		 name: "testPersonInteractionAndMovement",
		 description: "Person says 'Did you know that you can go through orange and yellow doors?' when player touches them, otherwise says '' and moves along the x axis",
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
		 test: testCoin2VisibilityAndPlayerTouchesCoin2,
		 name: "testCoin2VisibilityAndPlayerTouchesCoin2",
		 description: "Coin2 visibility and player touches coin2",
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
		 test: testPlayerTouchesKeyBlueAndIncreasesCoins,
		 name: "testPlayerTouchesKeyBlueAndIncreasesCoins",
		 description: "Player touches key-blue and increases coins",
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
