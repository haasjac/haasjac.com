$(function () {
	var contentData = {}, item_count = {}, list_count = 0;

	getContent();
	createContainer();
	setEventHandlers();

	function getContent() {
		contentData = [
			{
				header: "Category 1",
				items: [
					{
						text: "Text 1",
						link: "Link 1"
					},
					{
						text: "Text 2",
						link: "Link 2"
					}
				]
			},
			{
				header: "Category 2",
				items: [
					{
						text: "Text",
						link: "Link"
					}
				]
			}
		];
	}

	function createContainer() {
		$('#container').empty();
		for (var list_num = 0; list_num < contentData.length; list_num++) {
			var category = $('<li id="category_' + list_num + '" class="ui-state-default category"></li>');
			var header = $('<div>' +
				'<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' +
				' Category: <input type="text" name="header_' + list_num + '" id="header_' + list_num + '" value="' + contentData[list_num].header + '" /> ' +
				'<button type="button" id="delete_button_' + list_num + '" class="ui-button deleteCategoryButton">Delete Category</button>' +
				'</div>');
			var footer = $('<div>' +
				'<span class="ui-icon ui-icon-blank"></span>' +
				'<button type="button" id="button_' + list_num + '" class="ui-button addButton">Add Entry</button>' +
				'</div>');
			var list = $('<ul id="list_' + list_num + '" class="list"></ul>');

			for (var i = 0; i < contentData[list_num].items.length; i++) {
				var item = $('<li class="ui-state-default" id="list_' + list_num + '_item_' + i + '"></li>');
				item.append('<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>');
				item.append('<input type="text" name="list_' + list_num + '_text_' + i + '" id="list_' + list_num + '_text_' + i + '" value="' + contentData[list_num].items[i].text + '" />');
				item.append('<input type="text" name="list_' + list_num + '_link_' + i + '" id="list_' + list_num + '_link_' + i + '" value="' + contentData[list_num].items[i].link + '" />');
				item.append(' <button type="button" id="list_' + list_num + '_button_' + i + '" class="ui-button deleteButton">Delete Entry</button>');
				list.append(item);
			}
			item_count[list_num] = i;
			category.append(header).append(list).append(footer);
			$('#container').append(category);
		}
		list_count = contentData.length;
	}

	function setEventHandlers() {
		$("#form").submit(function (e) {

			e.preventDefault();

			var data = [];

			var categories = $("#container").sortable("toArray");

			for (var i = 0; i < categories.length; i++) {
				var list_num = categories[i].replace(/category_/g, "");
				var header = $("#header_" + list_num).val();
				var items = $("#list_" + list_num).sortable("toArray");
				var category = {};
				category.header = header;
				category.items = [];
				for (var j = 0; j < items.length; j++) {
					var item_list_num = items[j].replace(/_item_\d+/g, "").replace(/list_/g, "");
					var item_id = items[j].replace(/list_\d+/g, "").replace(/_item_/g, "");
					var obj = {
						text: $("#list_" + item_list_num + "_text_" + item_id).val(),
						link: $("#list_" + item_list_num + "_link_" + item_id).val()
					};
					category.items.push(obj);
				}
				data.push(category);
			}

			contentData = data;
			$.ajax({
				url: '',
				type: 'GET',
				contentType: 'application/json',
				data: {},
				success: function (data) {
					createContainer();
					$("#container").sortable({
						placeholder: "ui-state-highlight",
						start: function (e, ui) {
							ui.placeholder.height(ui.item.height());
						}
					});

					$(".list").sortable({
						placeholder: "ui-state-highlight",
						start: function (e, ui) {
							ui.placeholder.height(ui.item.height());
						},
						connectWith: ".list",
					});
					console.log(contentData);
				},
				error: function (xhr, status, error) {
					$('#error').html(error);
					$('#error-details').html(xhr.responseText);
					$('#error-message').dialog("open");
				}
			});
			return false;
		});

		$("#container").sortable({
			placeholder: "ui-state-highlight",
			start: function (e, ui) {
				ui.placeholder.height(ui.item.height());
			}
		});

		$(".list").sortable({
			placeholder: "ui-state-highlight",
			start: function (e, ui) {
				ui.placeholder.height(ui.item.height());
			},
			connectWith: ".list",
		});

		$("#container").on("click", ".addButton", function () {
			var list_num = $(this).attr("id").replace(/button_/g, "");
			var item = $('<li class="ui-state-default" id="list_' + list_num + '_item_' + item_count[list_num] + '"></li>');
			item.append('<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>');
			item.append('<input type="text" name="list_' + list_num + '_text_' + item_count[list_num] + '" id="list_' + list_num + '_text_' + item_count[list_num] + '" placeholder="Gatriex" />');
			item.append('<input type="text" name="list_' + list_num + '_link_' + item_count[list_num] + '" id="list_' + list_num + '_link_' + item_count[list_num] + '" placeholder="https://gatriex.com" />');
			item.append(' <button type="button" id="list_' + list_num + '_button_' + item_count[list_num] + '" class="ui-button deleteButton">Delete Entry</button>');
			$('#list_' + list_num).append(item);
			item_count[list_num] = item_count[list_num] + 1;
		});

		$("#container").on("click", ".deleteButton", function () {
			var item = $(this).attr("id").replace(/button/g, "item");
			$('#' + item).remove();
		});

		$("#form").on("click", ".addCategoryButton", function () {
			var category = $('<li id="category_' + list_count + '" class="ui-state-default category"></li>');
			var header = $('<div>' +
				'<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' +
				' Category: <input type="text" name="header_' + list_count + '" id="header_' + list_count + '" placeholder="Category" /> ' +
				'<button type="button" id="delete_button_' + list_count + '" class="ui-button deleteCategoryButton">Delete Category</button>' +
				'</div>');
			var footer = $('<div>' +
				'<span class="ui-icon ui-icon-blank"></span>' +
				'<button type="button" id="button_' + list_count + '" class="ui-button addButton">Add Entry</button>' +
				'</div>');
			var list = $('<ul id="list_' + list_count + '" class="list"></ul>');

			item_count[list_count] = 0;
			category.append(header).append(list).append(footer);
			$('#container').append(category);
			list_count++;
			$(".list").sortable({
				placeholder: "ui-state-highlight",
				connectWith: ".list",
			});
		});

		$("#container").on("click", ".deleteCategoryButton", function () {
			var item = $(this).attr("id").replace(/delete_button/g, "category");
			$('#' + item).remove();
		});

		$("#error-message").dialog({
			autoOpen: false,
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});

		$('#show_error-details').click(function () {
			$('#error-details').toggle();
		});
	}
});