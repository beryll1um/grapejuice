// Added champion rank into schema
Identity.prototype.Schema =
	"<a:help>Specifies various names and values associated with the entity, typically for GUI display to users.</a:help>" +
	"<a:example>" +
		"<Civ>athen</Civ>" +
		"<GenericName>Athenian Hoplite</GenericName>" +
		"<SpecificName>Hoplī́tēs Athēnaïkós</SpecificName>" +
		"<Icon>units/athen_infantry_spearman.png</Icon>" +
	"</a:example>" +
	"<element name='Civ' a:help='Civilization that this unit is primarily associated with, typically a 4-letter code. Choices include: gaia (world objects), skirm (skirmish map placeholders), athen (Athenians), brit (Britons), cart (Carthaginians), gaul (Gauls), iber (Iberians), kush (Kushites), mace (Macedonians), maur (Mauryas), pers (Persians), ptol (Ptolemies), rome (Romans), sele (Seleucids), spart (Spartans).'>" +
		"<text/>" +
	"</element>" +
	"<optional>" +
		"<element name='Lang' a:help='Unit language for voices.'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Phenotype' a:help='Unit phenotype for voices and visual. If more than one is specified a random one will be chosen.'>" +
			"<attribute name='datatype'>" +
				"<value>tokens</value>" +
			"</attribute>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<element name='GenericName' a:help='Generic English-language name for this entity.'>" +
		"<text/>" +
	"</element>" +
	"<optional>" +
		"<element name='SpecificName' a:help='Specific native-language name for this entity.'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='SelectionGroupName' a:help='Name used to group ranked entities.'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Tooltip'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='History'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Rank'>" +
			"<choice>" +
				"<value>Basic</value>" +
				"<value>Advanced</value>" +
				"<value>Elite</value>" +
				"<value>Champion</value>" +
			"</choice>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Classes' a:help='Optional list of space-separated classes applying to this entity. Choices include: AfricanElephant, AmunGuard, Animal, ApedemakGuard, Ashoka, Barter, CitizenSoldier, CivCentre, CivSpecific, ConquestCritical, Domestic, DropsiteFood, DropsiteMetal, DropsiteStone, DropsiteWood, FastMoving, FemaleCitizen, Foundation, GarrisonFortress, Human, IndianElephant, Juggernaut, KushTrireme, MercenaryCamp, Organic, Player, PtolemyIV, SeaCreature, Spy, Structure, Unit, WallLong, WallMedium, WallShort, WallTower.'>" +
			"<attribute name='datatype'>" +
				"<value>tokens</value>" +
			"</attribute>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='VisibleClasses' a:help='Optional list of space-separated classes applying to this entity. These classes will also be visible in various GUI elements. If the classes need spaces, underscores will be replaced with spaces. Choices include: Amphitheater, Archer, ArmyCamp, Arsenal, ArtilleryTower, Axeman, Barracks, Bireme, BoltShooter, BoltTower, Bribable, Camel, Cavalry, Champion, Chariot, Citizen, City, Civic, CivilCentre, Colony, Corral, Council, Crossbowman, Defensive, Dock, Dog, Economic, Elephant, ElephantStable, Embassy, Farmstead, Field, Fireship, FishingBoat, Forge, Fortress, Gate, Gladiator, Gymnasium, Hall, Healer, Hero, House, Immortal, Infantry, Javelineer, Library, Lighthouse, Maceman, Melee, Market, Mercenary, Military, Monument, Naval, Outpost, Palace, Palisade, Pikeman, Pillar, Pyramid, Quinquereme, Ram, Range, Ranged, Relic, Resource, RotaryMill, SentryTower, Ship, Shipyard, Siege, SiegeTower, SiegeWall, Slave, Slinger, Soldier, Spearman, Stable, Stoa, StoneThrower, StoneTower, Storehouse, Support, Swordsman, Syssiton, Temple, TempleOfAmun, TempleOfApedemak, TempleOfMars, TempleOfVesta, Theater, Tower, Town, Trade, Trader, Trireme, TriumphalArch, Village, Wall, Warship, Wonder, Worker.'>" +
			"<attribute name='datatype'>" +
				"<value>tokens</value>" +
			"</attribute>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Formations' a:help='Optional list of space-separated formations this unit is allowed to use. Choices include: Scatter, Box, ColumnClosed, LineClosed, ColumnOpen, LineOpen, Flank, Skirmish, Wedge, Testudo, Phalanx, Syntagma, BattleLine.'>" +
			"<attribute name='datatype'>" +
				"<value>tokens</value>" +
			"</attribute>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Icon'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='RequiredTechnology' a:help='Optional name of a technology which must be researched before the entity can be produced.'>" +
			"<text/>" +
		"</element>" +
	"</optional>" +
	"<optional>" +
		"<element name='Controllable' a:help='Whether players can control this entity. Defaults to true.'>" +
			"<data type='boolean'/>" +
		"</element>" +
	"</optional>" +
	"<element name='Undeletable' a:help='Prevent players from deleting this entity.'>" +
		"<data type='boolean'/>" +
	"</element>";

Engine.ReRegisterComponentType(IID_Identity, "Identity", Identity);
