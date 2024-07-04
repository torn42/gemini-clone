export const formatText = (text: string) => {
  const textArray = text.split('**');
  let formattedText: string = '';
  for (let i = 0; i < textArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      formattedText += textArray[i];
    } else {
      formattedText += '<b>' + textArray[i] + '</b>';
    }
  }
  return formattedText.split('*').join('</br>');
};