const createRules = (list) => {
	const headers = list.map((item) => {
		const {
			name,
			value
		} = item;
		const header = {
			header: name,
			value,
			ooperation: 'set',
		};
		return header;
	});

	const rule = {
		id,
		priority: 1,
		action: {
			type: 'modifyHeaders',
			requestHeaders: headers,
		},
		condition: {
			urlFilter: '*',
			resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest'],
		},
	};
	return rule;
};

const getNewRules = async () => {
	try {
		const list = await getHeaderList(); // 从storage内获取规则数据，由于不是网络请求修改的核心代码，故省略函数实现
		const rule = createRules(list);
		return [rule];
	} catch (err) {
		return null;
	}
};

const getCurrentRules = async () => {
	const rules = await chrome.declarativeNetRequest.getDynamicRules();
	return rules;
};

const setRules = async () => {
	try {
		const newRules = await getNewRules();
		const currentRules = await getCurrentRules();
		const removeIds = currentRules?.map((rule) => rule.id);
		const option = {
			addRules: newRules,
			removeRuleIds: removeIds,
		};
		chrome.declarativeNetRequest.updateDynamicRules(option, () => {
			console.log(chrome.runtime.lastError);
		});
	} catch (err) {
		console.log(err);
	}
};

const initRules = async () => {
	setRules();
};

const updateRules = () => {
	chrome.storage.onChanged.addListener(async (changes, area) => {
		if (changes && changes.updateRule && area === 'local') {
			setRules();
		}
	});
};

const setRequestheader = () => {
	initRules();
	updateRules();
};

setRequestheader();