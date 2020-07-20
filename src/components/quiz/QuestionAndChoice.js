import { question } from '../../data/question';
import { genre } from '../../data/genre';
import { choice } from '../../data/choice';


export function getQuestionAndChoiceList(genreId, questionNo) {
    let questionList;

    if (genreId < 0) {
        const genreIdListInCategory = genre.filter(g => g.categoryId == genreId * -1).map(g => g.id);
        questionList = question.filter(q => genreIdListInCategory.includes(q.genreId));
    } else {
        questionList = question.filter(q => q.genreId === genreId);
    }

    questionList = shuffle(questionList).slice(0, questionNo);

    let questionAndChoiceList = [];

    for (let q of questionList) {
        questionAndChoiceList.push({
            question: q,
            choice: getChoice(q.id)
        });
    }

    return questionAndChoiceList;
}

function getChoice(questionId) {
    let choiceList = choice.filter(c => c.questionId === questionId);
    choiceList = shuffle(choiceList);
    return choiceList;
}

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}