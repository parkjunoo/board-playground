package asiwant.playgroundbackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PlaygroundController {
	@GetMapping("/item")
	public String home() {
		System.out.println("하이하");
		return "데이터 준비중 ...";
	}

}
