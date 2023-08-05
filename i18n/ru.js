/**
 * Internationalisation file for AutoWikiBrowser script
 * See https://en.wikipedia.org/wiki/User:Joeytje50/JWB.js for the full script, as well as licensing.
 * Licensed under GNU GPL 2. http://www.gnu.org/copyleft/gpl.html
 */

/** русский (Russian)
 * @author Mix Gerder (on Wikia)
 */
JWB.messages.ru = {
    // General interface
    'tab-setup': 'Настройки',
    'tab-editing': 'Редактирование',
    'tab-skip': 'Пропустить',
    'tab-other': 'Другие',
    'tab-log': 'Журнал',
    'pagelist-caption': 'Укажите названия страниц:',
    'editbox-caption': 'Область редактирования',
    'editbox-currentpage': 'Вы редактируете: <a href="/wiki/$2" target="_blank" title="$1">$1</a>',
    'no-changes-made': 'Изменений нет. Нажмите кнопку «Пропустить», чтобы перейти к следующей странице в списке.',
    'page-not-exists': 'Страница не существует, просмотр изменения не может быть создан.',

    // Stats
    'stat-pages': 'Всего страниц:',
    'stat-save': 'Страниц сохранено:',
    'stat-null': 'Пустые правки:',
    'stat-skip': 'Пропущенных страниц:',
    'stat-other': 'Другие:',

    // Tab 1
    'label-pagelist': 'Список страниц',
    'button-remove-dupes': 'Удалить дубликаты',
    'button-sort': 'Сортировать',
    'preparse': 'Использовать режим предварительного анализа',
    'tip-preparse': 'Просмотрите перечисленные страницы, отфильтровывая их до тех, которые не будут пропускаться текущими правилами пропуска.',
    'preparse-reset': 'сброс',
    'tip-preparse-reset': 'Удалите тег #PRE-PARSE-STOP в списке страниц, чтобы снова обработать весь список страниц',
    'pagelist-generate': 'Сгенерировать',
    'label-settings': 'Настройки',
    'store-setup': 'Сохранить настройки',
    'tip-store-setup': 'Сохраните текущие настройки в раскрывающемся меню для последующего доступа.\n' +
        'Чтобы иметь доступ к ним в более позднем сеансе, вам необходимо сохранить их на вики или загрузить их.',
    'load-settings': 'Загрузить:',
    'blank-setup': 'Пустая настройка',
    'delete-setup': 'Удалить',
    'tip-delete-setup': 'Удалить выбранную настройку.',
    'save-setup': 'Сохранить',
    'download-setup': 'Загрузить',
    'import-setup': 'Импорт',
    'tip-import-setup': 'Загрузите файлы настроек (формат файла JSON) с вашего компьютера.',
    'update-setup': 'Обновить',
    'tip-update-setup': 'Обновите настройки, сохранённые на вашей странице /$1.',

    // Tab 2
    'edit-summary': 'Описание:',
    'minor-edit': 'Незначительное изменение',
    'tip-via-JWB': 'Добавить (через скрипт JWB) в конец описания',
    'watch-add': 'добавить сейчас',
    'watch-remove': 'удалить сейчас',
    'watch-nochange': 'Не изменять список наблюдения',
    'watch-preferences': 'Смотреть на основе настроек',
    'watch-watch': 'Добавить страницы в список наблюдения',
    'watch-unwatch': 'Удалить страницы из списка наблюдения',
    'auto-save': 'Сохранить автоматически',
    'save-interval': 'каждые $1 секунд', //$1 — интервал времени/ожидания
    'tip-save-interval': 'Количество пауз между каждой правкой в секундах',
    'editbutton-stop': 'Остановить',
    'editbutton-start': 'Начать',
    'editbutton-save': 'Сохранить',
    'editbutton-preview': 'Предпросмотр',
    'editbutton-skip': 'Пропустить', // Это сообщение также используется во вкладке 4
    'editbutton-diff': 'Различие',
    'button-open-popup': 'Больше полей замены',
    'button-more-fields': 'Добавить поля.',
    'label-replace': 'Заменить:',
    'label-rwith': 'На:',
    'label-useregex': 'Регулярное выражение',
    'label-regex-flags': 'флаги:',
    'tip-regex-flags': 'Любые флаги для регулярных выражений, например, i для игнорирования.\n' +
        'В этом JWB-скрипте флаг _ обрабатывает символы подчёркивания и пробелы как одно и то же. Будьте внимательны.',
    'label-ignore-comment': 'Игнорировать неанализируемый контент',
    'tip-ignore-comment': 'Игнорировать комментарии и текст в тегах nowiki, source, math или pre.',
    'label-enable-RETF': 'Включить $1',
    'label-RETF': 'RegEx Typo Fixing (исправление опечаток)',
    'tip-refresh-RETF': 'Обновите список опечаток для новых изменений.',

    // Tab 3
    'label-redirects': 'Перенаправления:',
    'redirects-follow': 'Следить',
    'tip-redirects-follow': 'Редактировать страницу, на которую перенаправляется эта страница',
    'redirects-skip': 'Пропустить',
    'tip-redirects-skip': 'Пропустить перенаправления',
    'redirects-edit': 'Править',
    'tip-redirects-edit': 'Отредактируйте перенаправление вместо той страницы, на которую она перенаправляется',
    'label-skip-when': 'Пропустить, когда:',
    'skip-no-change': 'Никаких изменений не было сделано',
    'skip-exists-yes': 'существует',
    'skip-exists-no': 'не существует',
    'skip-exists-neither': 'ни то, ни это',
    'skip-after-action': 'Не редактировать страницы после переименования/защиты',
    'skip-contains': 'Когда страница содержит:',
    'skip-not-contains': 'Когда страница не содержит:',

    // Tab 4
    'editbutton-move': 'Переименовать',
    'editbutton-delete': 'Удалить',
    'editbutton-protect': 'Защитить',
    'move-header': 'Параметры переименования',
    'move-redir-suppress': 'Без перенаправления',
    'move-also': 'Также переименовать',
    'move-talk-page': 'страница обсуждения',
    'move-subpage': 'подстраницы',
    'move-new-name': 'Новое имя:',
    'protect-header': 'Параметры защиты',
    'protect-edit': 'Править:',
    'protect-move': 'Переименовать:',
    'protect-none': 'Нет защиты', // Это метка по умолчанию. Она должна указывать, что выпадающее меню используется для выбора уровней защиты
    'protect-autoconf': 'Новые и незарегистрированные участники',
    'protect-sysop': 'Только администраторы',
    'protect-expiry': 'Заканчивается:',

    //Dialog boxes
    'confirm-leave': 'Закрытие этой вкладки приведёт к потере всех результатов.',
    'alert-no-move': 'Введите новое имя страницы перед переименованием.',
    'not-on-list': 'Ваше имя участника не было найдено в контрольном списке JWB. Запросите доступ, связавшись с администратором.',
    'verify-error': 'Произошла ошибка при загрузке контрольной страницы AutoWikiBrowser:',
    'new-message': 'У вас новые сообщения. Чтобы просмотреть их, перейдите по ссылкам в строке состояния.',
    'no-pages-listed': 'Пожалуйста, укажите несколько статей, чтобы просмотреть их до нажатия кнопки «Старт».',
    'infinite-skip-notice': "Никакие правила замены не были определены, JWB будет автоматически пропускать все страницы, если никакие изменения не будут внесены.\n" +
        "Просмотрите эти параметры на вкладках «Содержимое» и «Пропустить».",
    'autosave-error': "При сохранении предыдущей страницы возникла проблема. Проверьте вкладку '$1' и убедитесь, что предыдущие изменения прошли правильно.",

    //Statuses
    'status-alt': 'загрузка...',
    'status-done': 'Готово',
    'status-newmsg': 'У вас $1 ($2)',
    'status-talklink': 'новых сообщений',
    'status-difflink': 'последние изменения',
    'status-load-page': 'Получение содержимого страницы',
    'status-submit': 'Отправка изменений',
    'status-preview': 'Предпросмотр',
    'status-diff': 'Сравнение изменений',
    'status-move': 'Переименование страницы',
    'status-delete': 'Удаление страницы',
    'status-undelete': 'Восстановление страницы',
    'status-protect': 'Защита страницы',
    'status-watch': 'Изменение списка наблюдения',
    'status-watch-added': '$1 добавлено в ваш список наблюдения',
    'status-watch-removed': '$1 удалено из вашего списка наблюдения',
    'status-regex-err': 'Ошибка регулярного выражения. Измените введённое регулярное выражение <i>replace </i>',
    'status-setup-load': 'Загрузка настроек JWB',
    'status-setup-submit': 'Сохранение настроек на вики',
    'status-setup-dload': 'Загрузка настроек',
    'status-old-browser': 'Используйте $1 для импорта.',
    'status-del-setup': "'$1' удалено. $2.",
    'status-del-default': 'Настройки по умолчанию сброшены. $1.',
    'status-del-undo': 'Отменить',
    'status-pl-over-lim': 'Достигнут лимит запроса сервера.',
    'status-unexpected': 'Неожиданная ошибка. Подробную техническую информацию см. на странице разработчиков.',

    //Setup
    'setup-prompt': 'Под каким именем вы хотите $1 ваши текущие настройки?',
    'setup-prompt-store': 'сохранённые',
    'setup-prompt-save': 'сохранить',
    'setup-summary': 'Обновление настроек JWB /*Полуавтоматически*/', //базируется на wgContentLanguage, а не на wgUserLanguage.
    'old-browser': 'Ваш браузер не поддерживает импорт файлов. Пожалуйста, перейдите на новый браузер или загрузите файл на вики. См. Строку состояния для links.this на основе wgContentLanguage, а не wgUserLanguage.',
    'not-json': 'Можно импортировать только JSON-файлы. Убедитесь, что ваш файл имеет расширение .json или при необходимости измените расширение файла.',
    'json-err': 'В настройках JWB обнаружена ошибка:\n$1\nПожалуйста, проверьте настройки $2.',
    'json-err-upload': 'файл',
    'json-err-page': "перейти на 'Special:MyPage/$1'",
    'setup-delete-blank': 'Вы не можете удалить пустую настройку.',

    //Pagelist generating
    'namespace-main': 'основное',
    'label-ns-select': 'Пространство имён:',
    'tip-ns-select': 'Чтобы выбрать несколько пространств имён, нажмите Ctrl и щёлкните мышью',
    'legend-cm': 'Категория',
    'label-cm': 'Категории:',
    'cm-include': 'Включают:',
    'cm-include-pages': 'страницы',
    'cm-include-subcgs': 'подкатегории',
    'cm-include-files': 'файлы',
    'legend-linksto': 'Ссылки на страницу',
    'label-linksto': 'Ссылки на:',
    'links-include': 'Включают:',
    'links-include-links': 'вики-ссылки',
    'links-include-templ': 'включения',
    'links-include-files': 'использование файла',
    'links-redir': 'Перенаправления:',
    'links-redir-redirs': 'перенаправления',
    'links-redir-noredirs': 'неперенаправления',
    'links-redir-all': 'и то, и другое',
    'label-link-redir': 'Включить ссылки на перенаправления',
    'tip-link-redir': 'Включить ссылки, направленные на одно из этих перенаправлений',
    'legend-ps': 'Страницы с префиксом',
    'label-ps': 'Префикс:',
    'legend-wr': 'Список наблюдения',
    'label-wr': 'Включить содержимое списка наблюдения',
    'legend-pl': 'Ссылки на странице',
    'label-pl': 'На странице:',
    'tip-pl': 'Получать список ссылок на странице.\nРазделяйте значения с помощью | вертикальных полос.',
};
