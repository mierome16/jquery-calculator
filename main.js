


$('#add').on('click', function(e) {
    e.preventDefault()
    
    var value1 = Number($('#num1').val())
    var value2 = Number($('#num2').val())
    var result = value1 + value2

    $('#result').val(result)
})

$('#subtract').on('click', function(e) {
    e.preventDefault()
    
    var value1 = Number($('#num1').val())
    var value2 = Number($('#num2').val())
    var result = value1 - value2

    $('#result').val(result)
})

$('#multiply').on('click', function(e) {
    e.preventDefault()
    
    var value1 = Number($('#num1').val())
    var value2 = Number($('#num2').val())
    var result = value1 * value2

    $('#result').val(result)
})

$('#divide').on('click', function(e) {
    e.preventDefault()
    
    var value1 = Number($('#num1').val())
    var value2 = Number($('#num2').val())
    var result = value1 / value2

    $('#result').val(result)
})