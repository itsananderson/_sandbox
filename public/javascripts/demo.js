function help(topic) {
    if (topic === undefined) {
        topic = 'default';
    }
    var message = ['topic not found'];

    var topics = {
        default : [
            'help("modules") - List modules',
            'more',
            'help'
        ],
        modules: [
            'module1()\t-\tBasics',
            'module2()\t-\tIntermediate',
            'module3()\t-\tAdvanced'
        ]
    };
    if (topics[topic] !== undefined) {
        message = topics[topic];
    }
    return 'help("' + topic + '")\n\n' + message.join('\n');
}


function module1() {
    people = [
        { 'name': 'alice', 'evil': false },
        { 'name': 'bob', 'evil': false },
        { 'name': 'eve', 'evil': true }
    ];
    return "Loaded module 1";
}